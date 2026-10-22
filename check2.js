const fs=require('fs');
const html=fs.readFileSync('src/pages/index.js','utf8');
const t=html.match(/<title>([\\s\\S]*?)<\/title>/i);
if(t) console.log(t[1].replace(/&amp;/g,'&'));
const m=html.match(/name="description"[^>]*content="([^"]*)"/i);
if(m) console.log(m[1]);
