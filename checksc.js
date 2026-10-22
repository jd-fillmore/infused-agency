const fs=require('fs');
const c=fs.readFileSync('src/pages/web-design/st-catharines.js','utf8');
console.log(c.includes('73 Alexandra'));
console.log(c.includes('43.197109'));
console.log(c.includes('L2P'));
console.log(c.includes('-79.243362'));
