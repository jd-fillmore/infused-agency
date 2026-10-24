import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const parser = require('@babel/parser');

function evalNode(node, ctx) {
  if (!node) return undefined;
  switch (node.type) {
    case 'ObjectExpression': {
      const o = {};
      for (const p of node.properties) {
        if (p.type !== 'ObjectProperty') continue;
        const k = p.key.type === 'Identifier' ? p.key.name : p.key.value;
        o[k] = evalNode(p.value, ctx);
      }
      return o;
    }
    case 'ArrayExpression': return node.elements.map(e => evalNode(e, ctx));
    case 'StringLiteral': return node.value;
    case 'NumericLiteral': return node.value;
    case 'BooleanLiteral': return node.value;
    case 'NullLiteral': return null;
    case 'TemplateLiteral': return node.expressions.length ? node.quasis.map(q=>q.value.cooked).join('${}') : node.quasis[0].value.cooked;
    case 'UnaryExpression': return node.operator==='-' ? -evalNode(node.argument,ctx) : undefined;
    case 'Identifier': {
      if (ctx.consts[node.name] !== undefined) return ctx.consts[node.name];
      if (ctx.imports[node.name]) return ctx.imports[node.name];
      return undefined;
    }
    default: return undefined;
  }
}

function extract(file) {
  const src = fs.readFileSync(file,'utf8');
  const ast = parser.parse(src,{sourceType:'module',plugins:['jsx']});
  const ctx={imports:{},consts:{}};
  for (const n of ast.program.body) {
    if (n.type==='ImportDeclaration') {
      const s=n.source.value;
      for (const spec of n.specifiers) {
        if (spec.type==='ImportDefaultSpecifier') {
          if (/\.(jpe?g|png|webp|gif|avif|svg)$/i.test(s)) ctx.imports[spec.local.name]='/img/'+path.basename(s);
          else ctx.imports[spec.local.name]=undefined;
        }
      }
    }
  }
  // pass 1 consts in order (allow references)
  for (const n of ast.program.body) {
    if (n.type==='VariableDeclaration') {
      for (const d of n.declarations) {
        if (d.id.type==='Identifier') {
          const v=evalNode(d.init,ctx);
          if (v!==undefined) ctx.consts[d.id.name]=v;
        }
      }
    }
  }
  let page;
  for (const n of ast.program.body) {
    if (n.type==='VariableDeclaration') {
      for (const d of n.declarations) {
        if (d.id.type==='Identifier' && d.id.name==='page') page=evalNode(d.init,ctx);
      }
    }
  }
  return page;
}

const dirs=['src/pages/seo','src/pages'];
const files=[];
for (const f of fs.readdirSync('src/pages/seo')) if (/^for-.*-niagara\.js$/.test(f)) files.push('src/pages/seo/'+f);
for (const c of ['beamsville','crystal-beach','fonthill','fort-erie','grimsby','niagara-on-the-lake','thorold','welland']) files.push(`src/pages/seo/${c}.js`);
let ok=0, bad=0;
for (const f of files) {
  try {
    const p=extract(f);
    if (!p) { console.log('NO PAGE',f); bad++; continue; }
    const keys=Object.keys(p);
    const missing=[]; if(!p.seo) missing.push('seo'); if(!p.hero) missing.push('hero'); if(!p.faqs) missing.push('faqs');
    console.log('OK',f,keys.length,missing.length?'MISSING '+missing.join(','):'', p.seo?.title?.slice(0,50));
    ok++;
  } catch(e){ console.log('ERR',f,e.message); bad++; }
}
console.log({ok,bad});
