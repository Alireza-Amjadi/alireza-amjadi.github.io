
(function(){
  var d=document,root=d.documentElement;root.classList.remove('no-js');
  var tb=d.getElementById('theme');
  function cur(){return root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}
  tb&&tb.addEventListener('click',function(){var n=cur()==='dark'?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}});
  var mb=d.getElementById('menu'),nav=d.querySelector('.nav');
  mb&&mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  d.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open')})});
  var els=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add('in')});
  var cv=d.getElementById('gait');if(!cv)return;
  var G={"hip":[30.0,29.9,29.8,29.69,29.58,29.46,29.34,29.21,29.08,28.94,28.79,28.64,28.48,28.32,28.15,27.97,27.79,27.6,27.41,27.21,27.0,26.78,26.54,26.28,26.01,25.71,25.41,25.08,24.74,24.39,24.02,23.64,23.25,22.84,22.43,22.0,21.57,21.12,20.67,20.21,19.74,19.27,18.79,18.31,17.82,17.33,16.84,16.34,15.84,15.34,14.85,14.35,13.85,13.36,12.86,12.37,11.89,11.41,10.93,10.46,10.0,9.53,9.03,8.5,7.95,7.38,6.79,6.19,5.57,4.93,4.29,3.64,2.98,2.31,1.65,0.98,0.31,-0.35,-1.01,-1.66,-2.3,-2.93,-3.54,-4.14,-4.72,-5.29,-5.83,-6.35,-6.84,-7.3,-7.74,-8.14,-8.51,-8.84,-9.14,-9.39,-9.61,-9.78,-9.9,-9.97,-10.0,-9.99,-9.95,-9.88,-9.8,-9.69,-9.56,-9.4,-9.23,-9.04,-8.83,-8.61,-8.37,-8.11,-7.84,-7.56,-7.27,-6.97,-6.65,-6.33,-6.0,-5.59,-5.04,-4.35,-3.55,-2.65,-1.66,-0.59,0.54,1.71,2.93,4.16,5.4,6.64,7.86,9.04,10.18,11.26,12.26,13.18,14.0,14.77,15.56,16.36,17.17,17.98,18.8,19.62,20.44,21.25,22.06,22.85,23.63,24.39,25.14,25.86,26.56,27.22,27.86,28.46,29.03,29.55,30.04,30.47,30.86,31.2,31.48,31.7,31.87,31.97,32.0,32.0,31.99,31.97,31.95,31.92,31.88,31.84,31.8,31.75,31.69,31.63,31.57,31.5,31.43,31.36,31.28,31.2,31.11,31.03,30.94,30.85,30.76,30.67,30.57,30.48,30.38,30.29,30.19,30.1],"knee":[3.0,3.05,3.19,3.42,3.73,4.11,4.56,5.07,5.63,6.24,6.89,7.57,8.28,9.01,9.75,10.5,11.25,11.99,12.72,13.43,14.11,14.76,15.37,15.93,16.44,16.89,17.27,17.58,17.81,17.95,18.0,17.98,17.93,17.85,17.75,17.61,17.44,17.25,17.04,16.8,16.54,16.27,15.97,15.65,15.32,14.98,14.62,14.25,13.86,13.47,13.07,12.67,12.25,11.84,11.42,11.0,10.58,10.16,9.75,9.33,8.93,8.53,8.14,7.75,7.38,7.02,6.68,6.35,6.03,5.73,5.46,5.2,4.96,4.75,4.56,4.39,4.25,4.15,4.07,4.02,4.0,4.04,4.16,4.36,4.63,4.98,5.39,5.86,6.4,7.0,7.65,8.35,9.11,9.91,10.75,11.64,12.56,13.52,14.5,15.52,16.56,17.63,18.71,19.81,20.92,22.04,23.17,24.3,25.44,26.57,27.69,28.81,29.92,31.01,32.09,33.14,34.17,35.18,36.15,37.09,38.0,38.92,39.92,40.97,42.07,43.22,44.4,45.6,46.82,48.05,49.28,50.5,51.71,52.88,54.03,55.13,56.18,57.17,58.09,58.94,59.7,60.37,60.93,61.39,61.72,61.93,62.0,61.91,61.65,61.22,60.64,59.92,59.07,58.09,57.01,55.82,54.55,53.19,51.77,50.28,48.75,47.18,45.58,43.96,42.34,40.72,39.11,37.53,35.98,34.48,33.03,31.65,30.34,29.12,28.0,26.9,25.75,24.56,23.34,22.09,20.82,19.53,18.25,16.96,15.69,14.44,13.21,12.02,10.86,9.76,8.71,7.73,6.82,5.98,5.24,4.59,4.04,3.59,3.27,3.07],"ankle":[0.0,-0.23,-0.58,-1.02,-1.53,-2.1,-2.69,-3.29,-3.89,-4.44,-4.95,-5.38,-5.71,-5.92,-6.0,-5.99,-5.96,-5.9,-5.83,-5.73,-5.62,-5.49,-5.34,-5.18,-5.0,-4.8,-4.6,-4.37,-4.14,-3.9,-3.64,-3.38,-3.1,-2.82,-2.53,-2.23,-1.93,-1.62,-1.31,-0.99,-0.68,-0.36,-0.04,0.29,0.61,0.93,1.24,1.56,1.87,2.17,2.47,2.77,3.05,3.33,3.6,3.86,4.11,4.35,4.58,4.8,5.0,5.2,5.4,5.61,5.82,6.04,6.26,6.48,6.7,6.92,7.15,7.37,7.6,7.82,8.04,8.25,8.47,8.67,8.88,9.08,9.27,9.45,9.63,9.8,9.96,10.12,10.26,10.39,10.51,10.62,10.72,10.8,10.87,10.93,10.97,10.99,11.0,10.89,10.58,10.07,9.39,8.56,7.58,6.47,5.25,3.94,2.55,1.09,-0.41,-1.95,-3.5,-5.05,-6.59,-8.09,-9.55,-10.94,-12.25,-13.47,-14.58,-15.56,-16.39,-17.07,-17.58,-17.89,-18.0,-17.95,-17.81,-17.57,-17.26,-16.87,-16.42,-15.91,-15.34,-14.73,-14.08,-13.39,-12.69,-11.96,-11.22,-10.48,-9.74,-9.01,-8.29,-7.6,-6.94,-6.32,-5.74,-5.21,-4.74,-4.33,-4.0,-3.7,-3.41,-3.12,-2.82,-2.53,-2.24,-1.96,-1.68,-1.4,-1.13,-0.87,-0.61,-0.37,-0.13,0.11,0.33,0.54,0.74,0.92,1.1,1.26,1.41,1.54,1.66,1.76,1.84,1.91,1.96,1.99,2.0,1.99,1.97,1.94,1.9,1.85,1.78,1.7,1.62,1.52,1.42,1.31,1.19,1.06,0.93,0.79,0.64,0.49,0.33,0.17],"assist":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.004,0.015,0.032,0.057,0.089,0.126,0.168,0.216,0.268,0.323,0.38,0.44,0.5,0.56,0.62,0.677,0.732,0.784,0.832,0.874,0.911,0.943,0.968,0.985,0.996,1.0,0.996,0.985,0.968,0.943,0.911,0.874,0.832,0.784,0.732,0.677,0.62,0.56,0.5,0.44,0.38,0.323,0.268,0.216,0.168,0.126,0.089,0.057,0.032,0.015,0.004,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-0.001,-0.004,-0.008,-0.015,-0.023,-0.032,-0.043,-0.055,-0.068,-0.082,-0.096,-0.11,-0.124,-0.138,-0.152,-0.165,-0.177,-0.188,-0.197,-0.205,-0.212,-0.216,-0.219,-0.22,-0.219,-0.216,-0.212,-0.205,-0.197,-0.188,-0.177,-0.165,-0.152,-0.138,-0.124,-0.11,-0.096,-0.082,-0.068,-0.055,-0.043,-0.032,-0.023,-0.015,-0.008,-0.004,-0.001,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]},N=G.hip.length,ctx=cv.getContext('2d'),rad=Math.PI/180;
  var LT=150,LS=142,HEEL=25,TOE=68,AH=20;
  function rot(v,a){var c=Math.cos(a),s=Math.sin(a);return[c*v[0]+s*v[1],-s*v[0]+c*v[1]]}
  function add(a,b){return[a[0]+b[0],a[1]+b[1]]}
  function lerp(a,b,t){return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  function leg(i){i=((i%N)+N)%N;var h=G.hip[i]*rad,k=G.knee[i]*rad,a=G.ankle[i]*rad,sh=h-k,fa=sh+a,knee=rot([0,LT],h),ank=add(knee,rot([0,LS],sh));
    return{hip:[0,0],knee:knee,ank:ank,sh:sh,fa:fa,heel:add(ank,rot([-HEEL,AH],fa)),toe:add(ank,rot([TOE,AH],fa))}}
  var low=[];for(var i=0;i<N;i++){var a=leg(i),b=leg(i+N/2);low.push(Math.max(a.heel[1],a.toe[1],b.heel[1],b.toe[1]))}
  var sm=low.map(function(_,i){var s=0;for(var j=-3;j<=3;j++)s+=low[(i+j+N)%N];return s/7});
  var C={};function colors(){var s=getComputedStyle(root);['--ink','--muted','--dim','--line','--line2','--acc','--amber','--bg','--card'].forEach(function(k){C[k]=s.getPropertyValue(k).trim()})}
  colors();new MutationObserver(colors).observe(root,{attributes:true,attributeFilter:['data-theme']});
  var mq=matchMedia('(prefers-color-scheme: light)');mq.addEventListener&&mq.addEventListener('change',colors);
  var W=560,H=520,dpr=Math.min(2,window.devicePixelRatio||1);cv.width=W*dpr;cv.height=H*dpr;ctx.scale(dpr,dpr);
  var playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,t=0,last=null,vis=true,pb=d.getElementById('play');
  function setP(p){playing=p;pb.textContent=p?'Pause':'Play';pb.setAttribute('aria-label',p?'Pause animation':'Play animation');if(p){last=null;requestAnimationFrame(loop)}}
  pb.addEventListener('click',function(){setP(!playing)});
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis&&playing){last=null;requestAnimationFrame(loop)}}).observe(cv);
  function seg(a,b,w,fill,stroke){ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.strokeStyle=stroke;ctx.lineWidth=w+3;ctx.stroke();ctx.strokeStyle=fill;ctx.lineWidth=w;ctx.stroke()}
  function foot(L,o){var p=[[-11,-11],[-HEEL+1,-1],[-HEEL,AH-6],[-HEEL+6,AH],[TOE-5,AH],[TOE,AH-4],[TOE-12,AH-11],[17,-1],[9,-11]];
    ctx.beginPath();p.forEach(function(v,j){var q=add(add(o,L.ank),rot(v,L.fa));j?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.closePath()}
  function draw(){
    var i=Math.floor(t*N)%N,gy=468,o=[W/2-10,gy-sm[i]];ctx.clearRect(0,0,W,H);
    ctx.strokeStyle=C['--line2'];ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(70,gy);ctx.lineTo(W-70,gy);ctx.stroke();
    ctx.setLineDash([2,14]);ctx.lineDashOffset=(t*2*64)%16;ctx.strokeStyle=C['--dim'];ctx.beginPath();ctx.moveTo(70,gy+10);ctx.lineTo(W-70,gy+10);ctx.stroke();ctx.setLineDash([]);
    var B=leg(i+N/2),P=function(L,k){return add(o,L[k])};
    seg(P(B,'hip'),P(B,'knee'),30,C['--card'],C['--line2']);seg(P(B,'knee'),P(B,'ank'),21,C['--card'],C['--line2']);foot(B,o);ctx.fillStyle=C['--card'];ctx.fill();ctx.strokeStyle=C['--line2'];ctx.lineWidth=1.5;ctx.stroke();
    var L=leg(i),hip=P(L,'hip'),knee=P(L,'knee'),ank=P(L,'ank'),tq=Math.max(0,G.assist[i]);
    seg(hip,knee,32,C['--card'],C['--ink']);seg(knee,ank,22,C['--card'],C['--ink']);foot(L,o);ctx.fillStyle=C['--card'];ctx.fill();ctx.strokeStyle=C['--ink'];ctx.lineWidth=1.6;ctx.stroke();
    var c1=lerp(knee,ank,.28),c2=lerp(knee,ank,.56);ctx.globalAlpha=.22;seg(c1,c2,30,C['--acc'],C['--acc']);ctx.globalAlpha=1;
    seg(lerp(knee,ank,.42),ank,3.5,C['--acc'],C['--acc']);
    seg(add(add(o,L.ank),rot([-HEEL+3,AH+4],L.fa)),add(add(o,L.ank),rot([TOE-16,AH+4],L.fa)),3.5,C['--acc'],C['--acc']);
    var at=add(c1,rot([-24,0],L.sh)),ab=add(add(o,L.ank),rot([-HEEL-3,AH-13],L.fa));
    ctx.save();ctx.shadowColor=C['--amber'];ctx.shadowBlur=4+30*tq;seg(at,ab,7,C['--amber'],C['--amber']);ctx.restore();
    [at,ab].forEach(function(q){ctx.beginPath();ctx.arc(q[0],q[1],3.6,0,7);ctx.fillStyle=C['--bg'];ctx.fill();ctx.strokeStyle=C['--amber'];ctx.lineWidth=1.8;ctx.stroke()});
    ctx.beginPath();ctx.arc(ank[0],ank[1],6.5,0,7);ctx.fillStyle=C['--bg'];ctx.fill();ctx.strokeStyle=C['--acc'];ctx.lineWidth=2.2;ctx.stroke();
    ctx.beginPath();ctx.arc(knee[0],knee[1],6.5,0,7);ctx.fillStyle=C['--card'];ctx.fill();ctx.strokeStyle=C['--ink'];ctx.lineWidth=1.6;ctx.stroke();
    ctx.beginPath();ctx.ellipse(o[0],o[1]-5,33,20,0,0,7);ctx.fillStyle=C['--card'];ctx.fill();ctx.strokeStyle=C['--ink'];ctx.lineWidth=1.6;ctx.stroke();
    ctx.beginPath();ctx.arc(o[0],o[1],7,0,7);ctx.fill();ctx.stroke();
  }
  function loop(ts){if(!playing||!vis||d.hidden)return;if(last!==null)t=(t+(ts-last)/1000/1.25)%1;last=ts;draw();requestAnimationFrame(loop)}
  d.addEventListener('visibilitychange',function(){if(!d.hidden&&playing){last=null;requestAnimationFrame(loop)}});
  draw();if(playing)requestAnimationFrame(loop);else{pb.textContent='Play'}
})();
