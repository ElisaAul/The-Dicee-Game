// Button Animation on Click
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button');
  const imgs = document.querySelectorAll('.dice');

  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.classList.add('is-clicked');

    imgs.forEach(img => {
  const roll = getRandom();
  img.src = `images/dice${roll}.png`;
});

  });
});
// Random Number
function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}


