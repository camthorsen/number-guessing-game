'use strict';

/* --------------- GAME SCRIPT ---------------  */

const range = 5;
const instructionText = `Type a number between 1 and ${range}`;

// STATE --------

let currentScore;
let guess = Number(document.querySelector('.guess-input').value);
let highScore = 0;
let secretNumber;

// FUNCTIONS --------

function isValidGuess() {
  // When there is no input
  if (!guess) {
    setTextContent('message', 'Please type a number into the box on the left');
    return false;
  }
  // When guess is not between 1 - (range)
  if (guess < 1 || guess > range) {
    setTextContent('message', `Number must be between 1 and ${range}`);
    return false;
  }
  // When input is not an integer
  if (guess !== Math.trunc(guess)) {
    setTextContent('message', 'Guess must be a whole number (no decimals)');
    return false;
  }
  return true;
}

function generateNewSecretNumber() {
  secretNumber = Math.trunc(Math.random() * range) + 1;
}

function loseGame() {
  setTextContent('secret-number', secretNumber);
  setTextContent('message', 'You lost the game 😱️');
}

function setTextContent(targetClass, newContent) {
  document.querySelector(`.${targetClass}`).textContent = newContent;
}

function startGame() {
  generateNewSecretNumber();
  currentScore = range;
  setTextContent('secret-number', '?');
  setTextContent('score', currentScore);
  setTextContent('message', 'Start guessing...');
  document.querySelector('.guess-input').value = '';
  document.querySelector('.secret-number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#0f0a1e';
}

function winGame() {
  setTextContent('secret-number', secretNumber);
  setTextContent('message', 'You guessed it! 🎉');
  document.querySelector('body').style.background = '#60b347';
  document.querySelector('.secret-number').style.width = '30rem';
  if (currentScore > highScore) {
    highScore = currentScore;
    setTextContent('highscore', highScore);
  }
}

// INITIALIZE --------

setTextContent('instructions', instructionText);
startGame();

// EVENT LISTENERS --------

document.querySelector('.btn__check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess-input').value);
  if (!isValidGuess()) {
    return;
  }

  if (guess === secretNumber) {
    winGame();

  } else {
    currentScore = Math.max(currentScore - 1, 0);
    setTextContent('message', guess > secretNumber ? 'Too high!' : 'Too low!');
    setTextContent('score', currentScore);
    if (currentScore === 0) {
      loseGame();
    }
  }
});

document.querySelector('.btn__restart').addEventListener('click', function () {
  startGame();
});


/* --------------- MODAL SCRIPT ---------------  */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnShowModal = document.querySelector('.show-modal');

// FUNCTIONS --------

function closeModal () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function showModal () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// EVENT LISTENERS --------

for (let i = 0; i < btnCloseModal.length; i += 1) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

btnShowModal.addEventListener('click', showModal);

overlay.addEventListener('click', closeModal);

// Global event listeners

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
