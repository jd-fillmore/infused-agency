const fs = require('fs');
const path = require('path');
const patterns = ['73 Alexandra', 'L2P', '43.197109', '-79.243362'];
let found = false;
function walk(dir) {
  if(found) return;
  const entries = fs.readdirSync(dir, {withFileTypes:true});
  for(let e of entries) {
    if(e.name === 'node_modules' || e.name === '.next' || e.name === '.git' || e.name === 'out') continue;
    const full = path.join(dir, e.name);
    if(e.isDirectory()) {
      walk(full);
    } else if(/\.(js|jsx|ts|tsx|json|txt|md|html)$/i.test(e.name)) {
      try {
        const content = fs.readFileSync(full, 'utf8');
        for(let p of patterns) {
          if(content.includes(p)) {
            console.log('FOUND: ' + p + ' in ' + full);
            found = true;
            break;
          }
        }
      } catch(e) {}
    }
  }
}
walk('.');
if(!found) console.log('NONE');
