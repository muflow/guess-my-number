'use strict';

//document.querySelector('.message').textContent = 'yes you win!'

// stabilire numer random da 0 a 20
// se non inserisci numero --> messaggio
// se sbagli numero (troppo bass o troppo alto) ---> messaggio
// se indovini numero ---> messaggio
// Il punteggio diminuisce di 1  ogni volta che non indovini il numero
// Quando arrivi a punteggio zero ---> messaggio

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Insert a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You loose!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = 'You loose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.guess').value = '';

  //  il valore è più alto cambialo, else lascialo
});

//se il punteggio è più alto del precedente, salvalo in "highscore"
