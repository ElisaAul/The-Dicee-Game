// Button Animation on Click
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.classList.add('is-clicked');
    setTimeout(() => btn.classList.remove('is-clicked'), 250);
  });
});