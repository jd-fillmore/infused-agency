const fs=require('fs');
const c=fs.readFileSync('components/CTA/cta.js','utf8');
if(c.match(/73|Alexandra|L2P|43\.197/)) console.log('found'); else console.log('clean');
