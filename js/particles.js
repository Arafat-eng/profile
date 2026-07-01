// ambient particle background, shared across all pages
(function(){
  const canvas = document.getElementById('bgcanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 70;
  for(let i=0;i<N;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.6 + 0.4,
      vx: (Math.random()-0.5)*0.15,
      vy: (Math.random()-0.5)*0.15,
      hue: Math.random() < 0.5 ? 262 : 187
    });
  }

  function tick(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = '#07060b';
    ctx.fillRect(0,0,w,h);

    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x=w; if(p.x>w) p.x=0;
      if(p.y<0) p.y=h; if(p.y>h) p.y=0;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.55)`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
