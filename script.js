'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', 'Insert a number!');
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "You win!";
    displayMessage('You win!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // wrong number
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      //document.querySelector(".message").textContent = "You lose!";
      displayMessage('You lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
});
