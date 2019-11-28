let btn = document.querySelector('button');
let body = document.querySelector('body');
let a = document.getElementsByTagName('body')[0];
console.log(a);
btn.addEventListener('click', () => {
  if (a.style.backgroundColor != 'red') a.style.backgroundColor = 'red';
  else {
    a.style.backgroundColor = 'white';
  }
});
