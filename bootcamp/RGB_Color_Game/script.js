let blocks = 6;
let colors = colorPicker();
let squares = document.querySelectorAll('.square');
let rgbValue = document.querySelector('#rgbValue');
let message = document.querySelector('#message');
let reset = document.querySelector('#reset');
let h1 = document.querySelector('h1');
let container = document.querySelector('#container');
let modes = document.querySelectorAll('.mode');
let pickedColor;
let result;
inetelize();
for (let i = 0; i < modes.length; i++) {
  modes[i].addEventListener('click', () => {
    inetelize(modes[i]);
  });
}
function modeFun(btn) {
  blocks = btn && btn.value ? +btn.value : 6;
  reset.classList.remove('selected');
  modes.forEach(bttn => bttn.classList.remove('selected'));
  if (btn) btn.classList.add('selected');
  h1.style.backgroundColor = 'steelblue';
  for (let i = 0; i < blocks; i++) {
    squares[i].style.display = 'block';
  }
  for (let i = blocks; i < 12; i++)
    if (squares[i]) {
      if (squares[i]) squares[i].style.display = 'none';
    }
}
function inetelize(btn) {
  modeFun(btn);
  colors = colorPicker();
  pickedColor = colors[getRandom(blocks - 1)];
  result = 'Try Again';
  message.textContent = result;
  rgbValue.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', () => {
      if (squares[i].style.backgroundColor == pickedColor) {
        squares.forEach(square => (square.style.backgroundColor = pickedColor));
        result = 'correct';
        reset.textContent = 'Play Again?';
        reset.classList.remove('selected');
        h1.style.backgroundColor = pickedColor;
      } else {
        result = 'Try Again';
        squares[i].style.backgroundColor = '#232323';
      }
      message.textContent = result;
    });
  }
}
reset.addEventListener('click', () => {
  blocks = 6;
  modeFun(reset);
  modes.forEach(bttn => bttn.classList.remove('selected'));
  reset.classList.add('selected');
  if (reset.textContent == 'Play Again?') {
    reset.textContent = 'New Colors';
  } else if (result == 'correct') {
    reset.textContent = 'Play Again?';
    reset.classList.remove('selected');
  }
  colors = colorPicker();
  inetelize();
});
function colorPicker() {
  let arr = [];
  for (let i = 0; i < blocks; i++) {
    arr.push(`rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`);
  }
  return arr;
}
function getRandom(num = 255) {
  return Math.floor(Math.random() * num + 1);
}
