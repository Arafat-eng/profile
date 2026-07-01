// click-to-enter gate -> navigates to the profile page
document.addEventListener('DOMContentLoaded', () => {
  const gate = document.getElementById('gate');
  if(!gate) return;
  gate.addEventListener('click', () => {
    gate.style.transition = 'opacity .5s ease';
    gate.style.opacity = '0';
    setTimeout(() => { window.location.href = 'profile.html'; }, 450);
  });
});
