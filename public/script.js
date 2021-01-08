'use strict';

let secretNumber;
let currentScore = 20;
let highScore = 0;
const initialMessage = 'Start guessing...';

function setTextContent(targetClass, newContent) {
  return document.querySelector(`.${targetClass}`).textContent = newContent;
}
function generateNewSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

generateNewSecretNumber();

document.querySelector('.btn__check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-input').value);

  // If player guesses correctly (wins) ---------------------------------------
  if (guess === secretNumber) {
    setTextContent('secret-number', secretNumber);
    setTextContent('message', 'You guessed it! 🎉');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.secret-number').style.width = '30rem';
    if (currentScore > highScore) {
      highScore = currentScore;
      setTextContent('highscore', highScore);
    }

  // If guess is invalid ---------------------------------------
    // When there is no input
  } else if (!guess) {
    setTextContent('message', 'Please type a number into the box on the left');
    // When guess is not between 1 - 20
  } else if (guess > 20 || guess < 1) {
    setTextContent('message', 'Number must be between 1 and 20');

    // When input is a decimal
  } else if (guess !== Math.trunc(guess)) {
    setTextContent('message', 'Guess must be a whole number (no decimals)');

  // If guess is valid but incorrect ---------------------------------------
  } else {
    setTextContent('message', guess > secretNumber ? 'Too high!' : 'Too low!');

    if (currentScore > 1) {
      currentScore -= 1;
      setTextContent('score', currentScore);

    } else {
      currentScore = 0;
      setTextContent('score', currentScore);
      setTextContent('secret-number', secretNumber);
      setTextContent('message', 'You lost the game 😱️');
    }
  }
});

document.querySelector('.btn__restart').addEventListener('click', function () {
  generateNewSecretNumber();
  setTextContent('secret-number', '?');
  currentScore = 20;
  document.querySelector('.guess-input').value = '';
  setTextContent('score', currentScore);
  setTextContent('message', initialMessage);
  document.querySelector('.secret-number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#0f0a1e';
});
