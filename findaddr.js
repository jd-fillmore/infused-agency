const fs = require('fs');
const path = require('path');

function walk(dir) {
  const entries = fs.readdirSync(dir, {withFileTypes:true});
  for(let e of entries) {
    if(e.name === 'node_modules' || e.name === '.next' || e.name === '.git') continue;
    const full = path.join(dir, e.name);
    if(e.isDirectory()) {
      walk(full);
    } else if(/\.(js|jsx|ts|tsx|json|txt|md|html)$/i.test(e.name)) {
      try {
        const content = fs.readFileSync(full, 'utf8');
        if(content.includes('73 Alexandra') || content.includes('L2P 1K2') || content.includes('43.197109') || content.includes('-79.243362')) {
          console.log(full);
        }
      } catch(e) {}
    }
  }
}
walk('.');
