'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.secret-number').textContent = secretNumber;

document.querySelector('.btn__check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess-input').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Please type in a guess';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
    } else if (guess > secretNumber && guess <= 20) {
        document.querySelector('.message').textContent = 'Too high!';
    } else if (guess < secretNumber && guess >= 1) {
        document.querySelector('.message').textContent = 'Too low!';
    } else {
        document.querySelector('.message').textContent = 'Number must be between 1 and 20';
    }
});
