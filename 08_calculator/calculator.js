const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod = prod * arr[i];
  }
  return prod;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let i = 1;
  let prod = 1;
  while (i <= n) {
    prod = prod * i;
    i++;
  }

  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
