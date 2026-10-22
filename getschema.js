const fs=require('fs');
const c=fs.readFileSync('src/lib/verticalSeoSchema.js','utf8');
const idx=c.indexOf('73 Alexandra');
if(idx>=0) {
  console.log(c.substring(idx-80, idx+150));
} else {
  console.log('not found');
}
