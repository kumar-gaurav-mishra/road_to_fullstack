let finalScore = document.getElementById('score');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let reset = document.getElementById('reset');
let input = document.getElementsByTagName('input')[0];
let text = document.getElementsByTagName('p')[0];
let p1Score = 0;
let p2Score = 0;
let limit = 5;

const restart = () => {
  p1Score = 0;
  p2Score = 0;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  finalScore.style.color = 'black';
};
reset.addEventListener('click', restart);

input.addEventListener('keyup', () => {
  restart();
  limit = input.value;
  text.textContent = 'Playing to ' + limit;
});
player1.addEventListener('click', () => {
  if (p1Score + p2Score < limit) p1Score += 1;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  if (p1Score + p2Score == limit) {
    finalScore.style.color = 'green';
  }
});
player2.addEventListener('click', () => {
  if (p1Score + p2Score < limit) p2Score += 1;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  if (p1Score + p2Score == limit) {
    finalScore.style.color = 'green';
  }
});
