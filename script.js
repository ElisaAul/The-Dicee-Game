// Button Animation on Click
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button');
  const imgs = document.querySelectorAll('.dice');
  const playerCards = document.querySelectorAll('.player-card');
  const resultHeading = document.querySelector('h2');

  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.classList.add('is-clicked');

    // remove Winner Class from previous round
    playerCards.forEach(card => card.classList.remove('winner'));

    const rolls = [];
    imgs.forEach((img, index) => {
      const roll = getRandom();
      rolls.push(roll);
      img.src = `images/Dice${roll}.png`;
    });

    //max Roll to determine Winner
    const maxRoll = Math.max(...rolls);

    const winners = [];
    rolls.forEach((roll, index) => {
      if (roll === maxRoll) {
        playerCards[index].classList.add('winner');
        winners.push(index + 1);

        // change Winner Dice Color
        imgs[index].src = `images/Dice${roll}Win.png`;
      }
         });

         // More Winners
      if (winners.length === 1) {
      resultHeading.textContent = `Player ${winners[0]} wins!`;
    } else if (winners.length === 2) {
      resultHeading.textContent = `It's a double!`;
    } else {
      resultHeading.textContent = `It’s a triple!`;
    }

    // timeout to remove the box-shadow effect after animation
    setTimeout(() => {
    btn.classList.remove('is-clicked');
  }, 300);
  });
});
// Random Number
function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}


