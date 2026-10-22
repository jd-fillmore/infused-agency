const fs=require('fs');
const shingleSet=(text,n=5)=>{
  const w=String(text||'').toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean);
  const set=new Set();
  for(let i=0;i+n<=w.length;i++) set.add(w.slice(i,i+n).join(' '));
  return set;
};
const jaccard=(a,b)=>{let inter=0;for(const s of a)if(b.has(s))inter++;const u=a.size+b.size-inter;return u?inter/u:0;};
const all=['ontario','quebec','british-columbia','alberta','saskatchewan','manitoba','nova-scotia','new-brunswick','newfoundland-and-labrador','prince-edward-island'];
const sets={}, info={};
for(const p of all){
  const c=JSON.parse(fs.readFileSync('data/vertical-seo/content/verticals/general-contractors/'+p+'.json','utf8'));
  const prose=c.intro+' '+c.localInsight+' '+c.localChecklist.join(' ')+' '+c.faqs.filter(f=>f.geoSpecific).map(f=>f.a).join(' ');
  sets[p]=shingleSet(prose);
  info[p]={summary:c.summary.length,words:prose.split(/\s+/).length};
  console.log(p,'summary_len='+c.summary.length,'uniqueWords='+prose.split(/\s+/).length);
}
console.log('--- any pairs over 0.35 ---');
let over=0, worst=0, wp='';
for(let i=0;i<all.length;i++){
  for(let j=i+1;j<all.length;j++){
    const a=all[i],b=all[j];
    const score=jaccard(sets[a],sets[b]);
    if(score>worst){worst=score;wp=a+' <-> '+b;}
    if(score>0.35){over++; console.log('OVER',a,'<->',b,'J='+score.toFixed(3));}
  }
}
console.log('WORST:',worst.toFixed(3),wp);
console.log(over?'OVER threshold pairs: '+over:'ALL PAIRS UNDER 0.35');
