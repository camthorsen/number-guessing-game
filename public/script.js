'use strict';

let secretNumber = Math.trunc(Math.random() * 2) + 1;
let currentScore = 20;
let highScore = 0;
const initialMessage = 'Start guessing...';

document.querySelector('.btn__check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-input').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please type in a number';

  // When input is decimal
  } else if (guess !== Math.trunc(guess)) {
    document.querySelector('.message').textContent = 'Must be a whole number (no decimals)';

  // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.secret-number').style.width = '30rem';
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }

  // When guess is too high
  } else if (guess > secretNumber && guess <= 20) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      currentScore -= 1;
      document.querySelector('.score').textContent = currentScore;
    } else {
      currentScore = 0;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.secret-number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'You lost the game 😱️';
    }

  // When guess is too low
  } else if (guess < secretNumber && guess >= 1) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      currentScore -= 1;
      document.querySelector('.score').textContent = currentScore;
    } else {
      currentScore = 0;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.secret-number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'You lost the game 😱️️';
    }

  // When guess is not between 1 - 20
  } else {
    document.querySelector('.message').textContent = 'Number must be between 1 and 20';
  }
});

document.querySelector('.btn__restart').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.guess-input').value = '';
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.secret-number').textContent = '?';
  document.querySelector('.message').textContent = initialMessage;
  document.querySelector('.secret-number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#0f0a1e';
});
