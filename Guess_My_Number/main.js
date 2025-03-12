'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const showMessage = document.querySelector('.message');
const guessNumber = document.querySelector('.guess');
const showNumber = document.querySelector('.number');
const showHighScore = document.querySelector('.highscore');
const showScore = document.querySelector('.score');
const body = document.querySelector('body');
console.log(secretNumber);
const displayMessage = function (message) {
  console.log(message);
  showMessage.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessNumber.value);
  if (guess != 0) {
    console.log('in if');
    main(guess);
  } else {
    console.log('out if');
    displayMessage('Enter a number to start');
  }
});

function main(guess) {
  console.log('in guess');
  if (guess === secretNumber) {
    console.log(guess);
    displayMessage('good Job');
    showNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    showNumber.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      showHighScore.textContent = highscore;
    }
  } else {
    if (score > 1) {
      console.log('salam');
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low!');
      score--;
      showScore.textContent = score;
    } else {
      displayMessage('You lost');
      showScore.textContent = 0;
    }
  }
}
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  showScore.textContent = score;
  showNumber.textContent = '?';
  guessNumber.value = '';

  body.style.backgroundColor = '#222';
  showNumber.style.width = '15rem';
});
