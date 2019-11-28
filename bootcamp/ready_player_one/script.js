let finalScore = document.getElementById('score');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let reset = document.getElementById('reset');
let p1Score = 0;
let p2Score = 0;

reset.addEventListener('click', () => {
  p1Score = 0;
  p2Score = 0;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  finalScore.style.color = 'black';
});

player1.addEventListener('click', () => {
  if (p1Score + p2Score < 5) p1Score += 1;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  if (p1Score + p2Score === 5) {
    finalScore.style.color = 'green';
  }
});
player2.addEventListener('click', () => {
  if (p1Score + p2Score < 5) p2Score += 1;
  finalScore.textContent = p1Score + ' to ' + p2Score;
  if (p1Score + p2Score === 5) {
    finalScore.style.color = 'green';
  }
});
