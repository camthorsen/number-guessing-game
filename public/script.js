'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.secret-number').textContent = secretNumber;

document.querySelector('.btn__check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess-input').value);

    // If there is no guess, give feedback that a number must be inputted
    if (!guess) {
        document.querySelector('.message').textContent = 'Please type in a guess';
    }
});
