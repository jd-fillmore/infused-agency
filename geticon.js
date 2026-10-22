const fs = require('fs');
const icon = fs.readFileSync('components/ui/Icon.js','utf8');
const lines = icon.split('\n');
for(let i=0; i<lines.length; i++) {
  if(lines[i].includes('star')) {
    for(let j=Math.max(0,i-5); j<Math.min(lines.length, i+40); j++) {
      console.log((j+1)+':'+lines[j]);
    }
    break;
  }
}
