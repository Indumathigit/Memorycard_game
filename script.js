document.addEventListener('DOMContentLoaded', function() {
  var flippedCards = [];
  var lockBoard = false;
  var matchedPairs = 0;
  
  var cards = document.querySelectorAll('.card');
  var resetButton = document.getElementById('reset-button');
  
  // Flip ON (rotate to show front)
  function flipOn(cardElement) {
    cardElement.style.transform = 'rotateY(180deg)';
  }
  
  // Flip OFF (rotate back)
  function flipOff(cardElement) {
    cardElement.style.transform = 'rotateY(0deg)';
  }
  
  function shake(cardElement) {
    cardElement.style.animation = 'shake 0.5s';
    setTimeout(function() {
      cardElement.style.animation = '';
    }, 500);
  }
  
  function shuffle() {
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.order = Math.floor(Math.random() * cards.length);
    }
  }
  
  function flipCard(event) {
    var cardElement = event.target;
    
    if (lockBoard || cardElement.style.transform === 'rotateY(180deg)') {
      return;
    }
    
    flipOn(cardElement);
    flippedCards.push(cardElement);
    
    if (flippedCards.length === 2) {
      lockBoard = true;
      checkMatch();
    }
  }
  
  function checkMatch() {
    var card1 = flippedCards[0];
    var card2 = flippedCards[1];
    var img1 = card1.querySelector('img').src;
    var img2 = card2.querySelector('img').src;
    
    if (img1 === img2) {
      matchedPairs++;
      if (matchedPairs === 8) {
        setTimeout(function() { alert('You won!'); }, 500);
      }
      resetBoard();
    } else {
      setTimeout(function() {
        flipOff(card1);
        flipOff(card2);
        shake(card1);
        shake(card2);
        resetBoard();
      }, 1000);
    }
  }
  
  function resetBoard() {
    lockBoard = false;
    flippedCards = [];
  }
  
  function resetGame() {
    for (var i = 0; i < cards.length; i++) {
      flipOff(cards[i]);
      cards[i].style.animation = '';
    }
    matchedPairs = 0;
    shuffle();
    resetBoard();
  }
  
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flipCard);
  }
  resetButton.addEventListener('click', resetGame);
  
  shuffle();
});
