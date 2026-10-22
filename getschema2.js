const fs=require('fs');
const c=fs.readFileSync('src/lib/verticalSeoSchema.js','utf8');
const idx=c.indexOf('const ADDRESS');
if(idx>=0) {
  console.log(c.substring(idx, idx+200));
}
