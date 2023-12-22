// Allows switching between cards when pressing the arrows
// Initially shows the card to which the current index is set

const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let currentIndex = 1;

function showCard(index) 
{
  cards.forEach((card, i) => 
  {
    if (i === index) 
    {
      card.classList.add('active');
    } else 
    {
      card.classList.remove('active');
    }
  });
}

leftArrow.addEventListener('click', () => 
{
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

rightArrow.addEventListener('click', () => 
{
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});

// Initially shows the first card
showCard(currentIndex);
