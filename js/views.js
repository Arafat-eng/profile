// session-only fake view counter (no backend)
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('viewcount');
  if(!el) return;
  const base = Math.floor(Math.random()*40) + 120;
  el.textContent = base.toLocaleString();
});
