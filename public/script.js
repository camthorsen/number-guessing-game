'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;

document.querySelector('.secret-number').textContent = secretNumber;

document.querySelector('.btn__check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-input').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please type in a guess';
  } else if (guess !== Math.trunc(guess)) {
    document.querySelector('.message').textContent = 'Must be a whole number (no decimals)';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > secretNumber && guess <= 20) {
      if (currentScore > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        currentScore -= 1;
        document.querySelector('.score').textContent = currentScore;
      } else {
        currentScore = 0;
        document.querySelector('.score').textContent = currentScore;
        document.querySelector('.message').textContent = 'You lost the game 😱️';
      }
  } else if (guess < secretNumber && guess >= 1) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      currentScore -= 1;
      document.querySelector('.score').textContent = currentScore;
    } else {
      currentScore = 0;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = 'You lost the game 😱️️';
    }
  } else {
    document.querySelector('.message').textContent = 'Number must be between 1 and 20';
  }
});
