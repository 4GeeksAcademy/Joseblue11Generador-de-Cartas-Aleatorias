const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const card = document.querySelector('.card');

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomCard = Math.floor(Math.random() * 13) + 1;

  card.className = `card ${randomSuit}`;

  card.querySelector('.center').textContent = randomCard;
  
  const suitsElements = card.querySelectorAll('.suit');
  
  suitsElements.forEach((suitElement) => {
    suitElement.textContent = '';
    suitElement.classList.remove('hearts', 'clubs', 'diamonds', 'spades');
    suitElement.classList.add(randomSuit);
    suitElement.textContent = suitElement.getAttribute('data-suit');
  });
}

generateRandomCard();

