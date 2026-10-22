const fs=require('fs');
const c=fs.readFileSync('components/CTA/cta.js','utf8');
const m=c.match(/.{0,50}73 Alexandra Blvd.{0,50}/);
if(m) console.log(m[0]); else console.log('none');
