const fs=require('fs');
let c=fs.readFileSync('src/pages/web-design/st-catharines.js','utf8');
c=c.replace(/73 Alexandra Blvd[^\n"]*/g,'St. Catharines, Ontario · Serving the Niagara Region');
c=c.replace(/L2P 1K2/g,'');
c=c.replace(/43\.197109/g,'');
c=c.replace(/-79\.243362/g,'');
fs.writeFileSync('src/pages/web-design/st-catharines.js',c);
console.log('done');
