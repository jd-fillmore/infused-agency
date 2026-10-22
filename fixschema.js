const fs=require('fs');
let c=fs.readFileSync('src/lib/verticalSeoSchema.js','utf8');
c=c.replace(/streetAddress:\s*"73 Alexandra Blvd",\s*/,'');
c=c.replace(/postalCode:\s*"L2P 1K2",\s*/,'');
c=c.replace(/const GEO\s*=\s*\{[\s\S]*?\};\s*/,'const GEO = undefined;\n');
c=c.replace(/latitude:\s*43\.197109,\s*/,'');
c=c.replace(/longitude:\s*-79\.243362,?\s*/,'');
fs.writeFileSync('src/lib/verticalSeoSchema.js',c);
console.log('done');
