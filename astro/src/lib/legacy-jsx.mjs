// Build-time content extraction for the legacy React pages that are made of
// bespoke JSX rather than a plain data object.
//
// The legacy source stays the single source of truth. This module parses the
// page, evaluates its simple top-level constants and turns the rendered JSX
// into an ordered list of semantic blocks (headings, paragraphs, lists,
// images, testimonials, FAQs). The Astro templates then render those blocks
// with the rebuilt design system.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(HERE, "../../..");

const requireFromRepo = createRequire(path.join(REPO_ROOT, "package.json"));

let babelParser;
function parser() {
  if (!babelParser) babelParser = requireFromRepo("@babel/parser");
  return babelParser;
}

const cache = new Map();
function memo(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif|svg)$/i;

function imagePublicPath(source) {
  if (!IMAGE_RE.test(source)) return undefined;
  return `/img/${path.basename(source)}`;
}

/* -------------------------------------------------------------------------- */
/* Expression evaluation                                                        */
/* -------------------------------------------------------------------------- */

function getMember(object, property) {
  if (object == null) return undefined;
  return object[property];
}

function evaluate(node, scope) {
  if (!node) return undefined;

  switch (node.type) {
    case "ObjectExpression": {
      const result = {};
      for (const property of node.properties) {
        if (property.type === "SpreadElement") {
          const spread = evaluate(property.argument, scope);
          if (spread && typeof spread === "object") Object.assign(result, spread);
          continue;
        }
        if (property.type !== "ObjectProperty") continue;
        const key =
          property.key.type === "Identifier"
            ? property.key.name
            : property.key.value;
        result[key] = evaluate(property.value, scope);
      }
      return result;
    }
    case "ArrayExpression":
      return node.elements
        .filter((element) => element != null)
        .map((element) =>
          element.type === "SpreadElement"
            ? evaluate(element.argument, scope)
            : evaluate(element, scope)
        )
        .flat();
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return node.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      return node.quasis
        .map((quasi, index) => {
          const expression =
            index < node.expressions.length
              ? evaluate(node.expressions[index], scope)
              : "";
          return `${quasi.value.cooked ?? ""}${expression ?? ""}`;
        })
        .join("");
    case "UnaryExpression":
      if (node.operator === "-") return -evaluate(node.argument, scope);
      if (node.operator === "!") return !evaluate(node.argument, scope);
      return undefined;
    case "Identifier":
      return scope[node.name];
    case "MemberExpression":
    case "OptionalMemberExpression": {
      const object = evaluate(node.object, scope);
      const property = node.computed
        ? evaluate(node.property, scope)
        : node.property.name;
      return getMember(object, property);
    }
    case "LogicalExpression": {
      const left = evaluate(node.left, scope);
      if (node.operator === "&&") return left ? evaluate(node.right, scope) : left;
      if (node.operator === "||") return left || evaluate(node.right, scope);
      if (node.operator === "??") return left ?? evaluate(node.right, scope);
      return undefined;
    }
    case "ConditionalExpression":
      return evaluate(node.test, scope)
        ? evaluate(node.consequent, scope)
        : evaluate(node.alternate, scope);
    case "BinaryExpression": {
      const left = evaluate(node.left, scope);
      const right = evaluate(node.right, scope);
      switch (node.operator) {
        case "===":
          return left === right;
        case "!==":
          return left !== right;
        case "==":
          return left == right;
        case "!=":
          return left != right;
        case ">":
          return left > right;
        case ">=":
          return left >= right;
        case "<":
          return left < right;
        case "<=":
          return left <= right;
        case "+":
          return left + right;
        default:
          return undefined;
      }
    }
    case "ParenthesizedExpression":
      return evaluate(node.expression, scope);
    case "TSAsExpression":
      return evaluate(node.expression, scope);
    default:
      return undefined;
  }
}

function collectConstants(program, scope) {
  // Two passes: simple constants first, then anything that references them.
  for (let pass = 0; pass < 2; pass += 1) {
    for (const node of program.body) {
      if (node.type !== "VariableDeclaration") continue;
      for (const declaration of node.declarations) {
        if (declaration.id.type !== "Identifier") continue;
        if (!declaration.init) continue;
        const name = declaration.id.name;
        if (scope[name] !== undefined) continue;
        const value = evaluate(declaration.init, scope);
        if (value !== undefined) scope[name] = value;
      }
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Inline text extraction                                                       */
/* -------------------------------------------------------------------------- */

function elementName(node) {
  const name = node.openingElement?.name;
  if (!name) return "";
  if (name.type === "JSXIdentifier") return name.name;
  if (name.type === "JSXMemberExpression") {
    const object = name.object;
    const property = name.property;
    const prefix = object?.type === "JSXIdentifier" ? object.name : "";
    return prefix ? `${prefix}.${property.name}` : property.name;
  }
  return "";
}

function getAttribute(node, name, scope) {
  const attribute = node.openingElement?.attributes?.find(
    (item) => item.type === "JSXAttribute" && item.name?.name === name
  );
  if (!attribute) return undefined;
  if (!attribute.value) return true;
  if (attribute.value.type === "StringLiteral") return attribute.value.value;
  if (attribute.value.type === "JSXExpressionContainer") {
    return evaluate(attribute.value.expression, scope);
  }
  return undefined;
}

function inline(node, scope) {
  if (!node) return "";

  switch (node.type) {
    case "JSXText":
      return node.value.replace(/\s+/g, " ");
    case "StringLiteral":
    case "NumericLiteral":
      return String(node.value);
    case "JSXExpressionContainer": {
      const value = evaluate(node.expression, scope);
      if (value == null || value === false || value === true) {
        if (
          node.expression.type === "JSXElement" ||
          node.expression.type === "JSXFragment"
        ) {
          return inline(node.expression, scope);
        }
        return "";
      }
      if (Array.isArray(value)) return value.join(" ");
      if (typeof value === "object") return "";
      return String(value);
    }
    case "JSXFragment":
      return node.children.map((child) => inline(child, scope)).join("");
    case "JSXElement": {
      const name = elementName(node);
      if (name === "br") return " ";
      if (name === "Image" || name === "img") return "";
      if (name === "Link" || name === "a") {
        const href = getAttribute(node, "href", scope);
        const text = node.children.map((child) => inline(child, scope)).join("");
        const label = text.replace(/\s+/g, " ").trim();
        if (!label) return "";
        return href ? `[${label}](${href})` : label;
      }
      return node.children.map((child) => inline(child, scope)).join("");
    }
    default:
      return "";
  }
}

function cleanInline(value) {
  return String(value ?? "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\s+/g, " ")
    .trim();
}

/* -------------------------------------------------------------------------- */
/* Block extraction                                                             */
/* -------------------------------------------------------------------------- */

const SKIP_ELEMENTS = new Set([
  "Head",
  "Nav",
  "Footer",
  "CTA",
  "CtaBand",
  "script",
  "style",
  "noscript",
  "HeroAtmosphere",
  "PageJsonLd",
  "Breadcrumb",
]);

function pushBlock(out, block) {
  if (!block) return;
  if (block.type === "paragraph" && !block.text) return;
  if (block.type === "heading" && !block.text) return;
  if (block.type === "list" && block.items.length === 0) return;
  if (block.type === "testimonial" && !block.quote && !block.person) return;

  const last = out[out.length - 1];
  if (
    last &&
    last.type === block.type &&
    JSON.stringify(last) === JSON.stringify(block)
  ) {
    return;
  }
  out.push(block);
}

function collectListItems(expression, scope, items) {
  if (!expression) return;

  if (expression.type === "CallExpression") {
    const callee = expression.callee;
    if (callee?.type === "MemberExpression" && callee.property?.name === "map") {
      const collection = evaluate(callee.object, scope);
      const callback = expression.arguments[0];
      if (Array.isArray(collection) && callback) {
        for (const item of collection) {
          const childScope = { ...scope };
          const param = callback.params?.[0];
          if (param?.type === "Identifier") childScope[param.name] = item;
          const body = callback.body;
          if (body?.type === "JSXElement" || body?.type === "JSXFragment") {
            if (body.type === "JSXFragment") {
              for (const child of body.children) {
                if (child.type === "JSXElement") {
                  const text = cleanInline(inline(child, childScope));
                  if (text) items.push(text);
                }
              }
            } else {
              const text = cleanInline(inline(body, childScope));
              if (text) items.push(text);
            }
          }
        }
      }
      return;
    }
  }

  if (expression.type === "ArrayExpression") {
    for (const element of expression.elements) {
      const value = evaluate(element, scope);
      if (typeof value === "string") items.push(value);
    }
    return;
  }

  if (expression.type === "Identifier") {
    const value = scope[expression.name];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === "string") items.push(item);
      }
    }
  }
}

function walkExpression(expression, scope, out) {
  if (!expression) return;

  if (expression.type === "CallExpression") {
    const callee = expression.callee;
    if (
      callee?.type === "MemberExpression" &&
      callee.property?.name === "map"
    ) {
      const collection = evaluate(callee.object, scope);
      const callback = expression.arguments[0];
      if (Array.isArray(collection) && callback) {
        for (const item of collection) {
          const childScope = { ...scope };
          const param = callback.params?.[0];
          if (param?.type === "Identifier") {
            childScope[param.name] = item;
          } else if (param?.type === "ObjectPattern") {
            for (const property of param.properties) {
              if (property.type !== "ObjectProperty") continue;
              const key = property.key.name ?? property.key.value;
              if (property.value.type === "Identifier") {
                childScope[property.value.name] = item?.[key];
              }
            }
          }
          const body = callback.body;
          if (body?.type === "JSXElement" || body?.type === "JSXFragment") {
            walk(body, childScope, out);
          } else if (body?.type === "BlockStatement") {
            const returned = body.body.find(
              (statement) => statement.type === "ReturnStatement"
            );
            if (returned?.argument) walk(returned.argument, childScope, out);
          }
        }
      }
      return;
    }
  }

  if (expression.type === "JSXElement" || expression.type === "JSXFragment") {
    walk(expression, scope, out);
    return;
  }

  if (expression.type === "LogicalExpression") {
    const left = evaluate(expression.left, scope);
    if (expression.operator === "&&") {
      if (left) walkExpression(expression.right, scope, out);
      return;
    }
    if (expression.operator === "||") {
      if (left) walkExpression(expression.left, scope, out);
      else walkExpression(expression.right, scope, out);
      return;
    }
  }

  if (expression.type === "ConditionalExpression") {
    const test = evaluate(expression.test, scope);
    walkExpression(test ? expression.consequent : expression.alternate, scope, out);
    return;
  }

  if (expression.type === "ParenthesizedExpression") {
    walkExpression(expression.expression, scope, out);
  }
}

function walk(node, scope, out) {
  if (!node) return;

  if (node.type === "JSXFragment") {
    for (const child of node.children) walk(child, scope, out);
    return;
  }

  if (node.type === "JSXText") return;

  if (node.type === "JSXExpressionContainer") {
    walkExpression(node.expression, scope, out);
    return;
  }

  if (node.type !== "JSXElement") return;

  const name = elementName(node);
  if (SKIP_ELEMENTS.has(name)) return;

  if (/^h[1-6]$/.test(name)) {
    const level = Number(name.slice(1));
    pushBlock(out, {
      type: "heading",
      level,
      text: cleanInline(inline(node, scope)),
    });
    return;
  }

  if (name === "p") {
    pushBlock(out, {
      type: "paragraph",
      text: cleanInline(inline(node, scope)),
    });
    return;
  }

  if (name === "ul" || name === "ol") {
    const items = [];
    for (const child of node.children) {
      if (child.type === "JSXElement" && elementName(child) === "li") {
        const text = cleanInline(inline(child, scope));
        if (text) items.push(text);
        continue;
      }
      if (child.type === "JSXExpressionContainer") {
        collectListItems(child.expression, scope, items);
      }
    }
    pushBlock(out, { type: "list", ordered: name === "ol", items });
    return;
  }

  if (name === "Image" || name === "img") {
    const src = getAttribute(node, "src", scope);
    const alt = getAttribute(node, "alt", scope);
    if (typeof src === "string" && src && !src.startsWith("data:")) {
      pushBlock(out, {
        type: "image",
        src,
        alt: typeof alt === "string" ? alt : "",
      });
    }
    return;
  }

  if (name === "figcaption") {
    pushBlock(out, {
      type: "caption",
      text: cleanInline(inline(node, scope)),
    });
    return;
  }

  if (name === "TestimonialCard") {
    pushBlock(out, {
      type: "testimonial",
      quote: getAttribute(node, "quote", scope),
      person: getAttribute(node, "person", scope),
      role: getAttribute(node, "role", scope),
      company: getAttribute(node, "company", scope),
      avatar: getAttribute(node, "avatar", scope),
      avatarAlt: getAttribute(node, "avatarAlt", scope),
    });
    return;
  }

  if (name === "Accordion") {
    const items = getAttribute(node, "items", scope);
    if (Array.isArray(items)) {
      pushBlock(out, {
        type: "faqs",
        items: items
          .map((item) => ({ q: item?.q, a: item?.a }))
          .filter((item) => item.q && item.a),
      });
    }
    return;
  }

  if (name === "EmbeddedMap") {
    pushBlock(out, {
      type: "map",
      place: getAttribute(node, "place", scope),
      title: getAttribute(node, "title", scope),
    });
    return;
  }

  if (name === "InnerHero" || name === "PageHero" || name === "Hero") {
    const title = getAttribute(node, "title", scope);
    const description = getAttribute(node, "description", scope);
    const image = getAttribute(node, "bgImage", scope);
    pushBlock(out, {
      type: "hero",
      title: typeof title === "string" ? title : "",
      description: typeof description === "string" ? description : "",
      image: typeof image === "string" ? image : undefined,
    });
    return;
  }

  if (name === "Button") {
    // Conversion points are rendered by the shared Astro hero and CTA band.
    return;
  }

  if (name === "Section") {
    const eyebrow = getAttribute(node, "eyebrow", scope);
    const heading = getAttribute(node, "heading", scope);
    const description =
      getAttribute(node, "subhead", scope) ??
      getAttribute(node, "description", scope);
    if (typeof eyebrow === "string" && eyebrow) {
      pushBlock(out, { type: "eyebrow", text: eyebrow });
    }
    if (typeof heading === "string" && heading) {
      pushBlock(out, { type: "heading", level: 2, text: heading });
    }
    if (typeof description === "string" && description) {
      pushBlock(out, { type: "lead", text: description });
    }
    for (const child of node.children) walk(child, scope, out);
    return;
  }

  if (name === "Link" || name === "a") {
    const hasBlockChild = node.children.some(
      (child) =>
        child.type === "JSXElement" &&
        ["Image", "img", "div", "figure", "span"].includes(elementName(child))
    );
    if (hasBlockChild) {
      for (const child of node.children) walk(child, scope, out);
      return;
    }
    const text = cleanInline(inline(node, scope));
    const href = getAttribute(node, "href", scope);
    if (text && typeof href === "string") {
      pushBlock(out, { type: "link", label: text, href });
    }
    return;
  }

  for (const child of node.children) walk(child, scope, out);
}

/* -------------------------------------------------------------------------- */
/* Page extraction                                                              */
/* -------------------------------------------------------------------------- */

function findReturnedJsx(functionNode) {
  if (!functionNode) return null;
  if (
    functionNode.body?.type === "JSXElement" ||
    functionNode.body?.type === "JSXFragment"
  ) {
    return functionNode.body;
  }
  if (functionNode.body?.type === "BlockStatement") {
    for (const statement of functionNode.body.body) {
      if (statement.type === "ReturnStatement" && statement.argument) {
        return statement.argument;
      }
    }
  }
  return null;
}

function findPageJsx(program) {
  let component = null;

  for (const node of program.body) {
    if (node.type === "ExportDefaultDeclaration") {
      if (node.declaration.type === "FunctionDeclaration") {
        component = node.declaration;
      } else if (node.declaration.type === "Identifier") {
        const name = node.declaration.name;
        for (const candidate of program.body) {
          if (candidate.type !== "VariableDeclaration") continue;
          for (const declaration of candidate.declarations) {
            if (declaration.id.name === name) component = declaration.init;
          }
          if (component) break;
        }
      }
    }
  }

  if (!component) {
    // Fallback: the last function declaration that is capitalised.
    for (const node of program.body) {
      if (
        node.type === "FunctionDeclaration" &&
        /^[A-Z]/.test(node.id?.name ?? "")
      ) {
        component = node;
      }
    }
  }

  if (!component) return null;
  if (component.type === "ArrowFunctionExpression") {
    return findReturnedJsx(component);
  }
  return findReturnedJsx(component);
}

function extractHead(program, scope) {
  let title = "";
  let description = "";
  let canonical = "";

  function visit(node) {
    if (!node || typeof node !== "object") return;
    if (node.type === "JSXElement") {
      const name = elementName(node);
      if (name === "title") {
        title = cleanInline(inline(node, scope)) || title;
      }
      if (name === "meta") {
        const metaName = getAttribute(node, "name", scope);
        const property = getAttribute(node, "property", scope);
        if (metaName === "description" || property === "og:description") {
          const content = getAttribute(node, "content", scope);
          if (typeof content === "string" && content) {
            description = content;
          }
        }
      }
      if (name === "link") {
        const rel = getAttribute(node, "rel", scope);
        const href = getAttribute(node, "href", scope);
        if (rel === "canonical" && typeof href === "string") canonical = href;
      }
    }
    for (const key of Object.keys(node)) {
      if (key === "loc" || key === "start" || key === "end") continue;
      const value = node[key];
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === "object" && value.type) visit(value);
    }
  }

  visit(program);
  return { title, description, canonical };
}

function defaultImportImages(program, scope) {
  for (const node of program.body) {
    if (node.type !== "ImportDeclaration") continue;
    const mapped = imagePublicPath(node.source.value);
    if (!mapped) continue;
    for (const specifier of node.specifiers) {
      if (specifier.type === "ImportDefaultSpecifier") {
        scope[specifier.local.name] = mapped;
      }
    }
  }
}

/**
 * @returns {{
 *   title: string,
 *   description: string,
 *   canonical: string,
 *   h1: string,
 *   hero: { title: string, description: string, image?: string } | null,
 *   blocks: any[],
 *   constants: Record<string, any>
 * }}
 */
export function extractLegacyContent(file) {
  const absolute = path.isAbsolute(file) ? file : path.join(REPO_ROOT, file);
  const source = fs.readFileSync(absolute, "utf8");

  return memo(`content:${absolute}`, () => {
    const ast = parser().parse(source, {
      sourceType: "module",
      plugins: ["jsx", "classProperties"],
    });

    const scope = {
      isExpanded: true,
      // Common inline helpers that are not worth evaluating.
      nbsp: " ",
    };
    defaultImportImages(ast.program, scope);
    collectConstants(ast.program, scope);

    const head = extractHead(ast.program, scope);
    const jsx = findPageJsx(ast.program);

    const blocks = [];
    if (jsx) walk(jsx, scope, blocks);

    // The hero is whatever hero block appears first; remove it from the body.
    const heroIndex = blocks.findIndex((block) => block.type === "hero");
    const hero = heroIndex >= 0 ? blocks.splice(heroIndex, 1)[0] : null;

    // If no InnerHero/PageHero component was used, look for a first-level
    // heading followed by a paragraph at the start of the page.
    const h1Index = blocks.findIndex(
      (block) => block.type === "heading" && block.level === 1
    );
    const h1 = h1Index >= 0 ? blocks[h1Index].text : hero?.title ?? "";
    if (h1Index >= 0) blocks.splice(h1Index, 1);

    // Pages written as raw <section> markup put the hero lead paragraph first.
    // Promote it into the shared hero instead of rendering it twice.
    let resolvedHero = hero;
    if (!resolvedHero && h1) {
      const leadIndex = blocks.findIndex((block) => block.type === "paragraph");
      if (leadIndex >= 0) {
        const [lead] = blocks.splice(leadIndex, 1);
        resolvedHero = { title: h1, description: lead.text, image: undefined };
      } else {
        resolvedHero = { title: h1, description: "", image: undefined };
      }
    }

    return {
      title: head.title,
      description: head.description,
      canonical: head.canonical,
      h1,
      hero: resolvedHero,
      blocks,
      constants: scope,
    };
  });
}

/**
 * Returns just the evaluated constants from a legacy page.
 */
export function extractLegacyConstants(file) {
  return extractLegacyContent(file).constants;
}

export function getLegacyRepoRoot() {
  return REPO_ROOT;
}
