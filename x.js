'use strict';
function x() {
  this.a = 20;
}
x();
function y() {
  this.b = 30;
}
y();
function z() {
  this.c = 40;
}
z();
console.log(global);
