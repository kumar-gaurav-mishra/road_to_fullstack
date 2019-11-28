let blocks = 6;
let colors = colorPicker();
let squares = document.querySelectorAll('.square');
let rgbValue = document.querySelector('#rgbValue');
let message = document.querySelector('#message');
let reset = document.querySelector('#reset');
let h1 = document.querySelector('h1');
let container = document.querySelector('#container');
let hardButton = document.querySelector('#hard');
let easyButton = document.querySelector('#easy');
let pickedColor;
let result;
inetelize();
function easy() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  blocks = 3;
  for (let i = blocks; i < 6; i++) {
    squares[i].style.display = 'none';
  }
}
function hard() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  blocks = 6;
  for (let i = 0; i < blocks; i++) {
    squares[i].style.display = 'block';
  }
}
hardButton.addEventListener('click', hard);
hardButton.addEventListener('click', inetelize);
easyButton.addEventListener('click', easy);
easyButton.addEventListener('click', inetelize);
function inetelize() {
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
  hard();
  easyButton.classList.remove('selected');
  hardButton.classList.remove('selected');
  if (reset.textContent == 'Play Again?') {
    reset.textContent = 'New Colors';
  } else if (result == 'correct') {
    reset.textContent = 'Play Again?';
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
