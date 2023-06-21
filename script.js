'use strict';

const loseSetup = function (msg, currScore) {
  set('.message', msg);
  if (currScore <= 1) {
    set('.number', secretNum);
    set('.message', '😅 You lose!');
    setBodyBackground('#902222');
    setNumberWidth('30rem');
  } else {
    set('.score', currScore - 1);
  }
};

const winSetup = function (msg, currScore, currHighscore) {
  set('.message', msg);
  set('.number', secretNum);
  setBodyBackground('#60b347');
  setNumberWidth('30rem');
  if (currScore > currHighscore) {
    set('.highscore', currScore);
  }
};

const rand = (min, max) => Math.floor(Math.random() * max) + min;

const setBodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const set = function (k, v) {
  document.querySelector(k).textContent = v;
};

const setInput = function (k, v) {
  document.querySelector(k).value = v;
};

const minNum = 1;
const maxNum = 20;
let secretNum = rand(minNum, maxNum); // minNum <= secretNum <= maxNum
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  const currScore = Number(document.querySelector('.score').textContent);
  const currHighscore = Number(
    document.querySelector('.highscore').textContent
  );
  if (document.querySelector('.guess').value === '') {
    set('.message', '🛑 No input detected!');
  } else if (guessNum === secretNum) {
    winSetup('🎉 Correct number!', currScore, currHighscore);
  } else if (guessNum < secretNum) {
    loseSetup('📈 Too low!', currScore);
  } else {
    loseSetup('📈 Too high!', currScore);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = rand(minNum, maxNum);
  setBodyBackground('#222');
  setNumberWidth('15rem');
  set('.score', maxNum);
  setInput('.guess', '');
  set('.message', 'Start guessing...');
  set('.number', '?');
});
