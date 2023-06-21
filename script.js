'use strict';

const minNum = 1;
const maxNum = 20;
let secretNum = Math.floor(Math.random() * maxNum) + minNum; // minNum <= secretNum <= maxNum
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  const currScore = Number(document.querySelector('.score').textContent);
  const currHighscore = Number(
    document.querySelector('.highscore').textContent
  );
  if (document.querySelector('.guess').value === '') {
    document.querySelector('.message').textContent = '🛑 No input detected!';
  } else if (guessNum === secretNum) {
    winSetup('🎉 Correct number!', currScore, currHighscore);
  } else if (guessNum < secretNum) {
    loseSetup('📈 Too low!', currScore);
  } else {
    loseSetup('📈 Too high!', currScore);
  }
});

const loseSetup = function (msg, currScore) {
  document.querySelector('.message').textContent = msg;
  if (currScore <= 1) {
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.message').textContent = '😅 You lose!';
    document.body.style.backgroundColor = '#902222';
  } else {
    document.querySelector('.score').textContent = currScore - 1;
  }
};

const winSetup = function (msg, currScore, currHighscore) {
  document.querySelector('.message').textContent = msg;
  document.querySelector('.number').textContent = secretNum;
  document.body.style.backgroundColor = '#60b347';
  if (currScore > currHighscore) {
    document.querySelector('.highscore').textContent = currScore;
  }
};

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.floor(Math.random() * maxNum) + minNum;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.score').textContent = maxNum;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
