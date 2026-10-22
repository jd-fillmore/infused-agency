const fs=require('fs');
const html=fs.readFileSync('src/pages/index.js','utf8');
const h=html.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi);
if(h){ h.forEach(x=>console.log(x.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&'))); }
