const $=(s,a=document)=>[...a.querySelectorAll(s)];
document.documentElement.classList.add('js');
addEventListener('load',()=>setTimeout(()=>document.body.classList.add('open'),350));
addEventListener('pointermove',e=>{const s=document.getElementById('spot');s.style.setProperty('--x',e.clientX+'px');s.style.setProperty('--y',e.clientY+'px')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$('.rv').forEach(el=>io.observe(el));
$('.num').forEach(el=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();const t=+el.dataset.n;let n=0;const id=setInterval(()=>{n+=Math.ceil(t/50);if(n>=t){n=t;clearInterval(id)}el.textContent=n+'+'},30)});o.observe(el)});
const mb=document.querySelector('.menu'),ln=document.querySelector('.links');
mb&&mb.addEventListener('click',()=>{const o=ln.classList.toggle('show');mb.setAttribute('aria-expanded',o)});
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200)}
$('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();toast('Done! Welcome to the stage, '+(f.name.value||'performer')+'.');f.reset();$('.modal').forEach(m=>m.classList.remove('show'))}));
const md=document.getElementById('reg');
$('[data-reg]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('evn').textContent=b.dataset.reg;md.classList.add('show');md.querySelector('input').focus()}));
$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('show')}));
addEventListener('keydown',e=>{if(e.key==='Escape')$('.modal').forEach(m=>m.classList.remove('show'))});
const cd=document.getElementById('cd');
if(cd){const T=new Date('2026-12-19T18:00:00+05:30');const u=()=>{let d=Math.max(0,T-new Date()),v=[86400e3,36e5,6e4,1e3].map(x=>{const n=Math.floor(d/x);d-=n*x;return n});$('b',cd).forEach((b,i)=>b.textContent=String(v[i]).padStart(2,'0'))};u();setInterval(u,1000)}
$('.gt').forEach(g=>g.addEventListener('click',()=>{
  const l=document.getElementById('lb');
  const photo=g.querySelector('img');
  const preview=l.querySelector('#lb-img');
  if(photo && preview){preview.src=photo.src;preview.alt=photo.alt;preview.style.display='block'}
  l.querySelector('em').textContent=g.dataset.e||'✦';
  l.querySelector('h3').textContent=g.dataset.t;
  l.querySelector('p').textContent=g.dataset.d;
  l.classList.add('show');
}));
