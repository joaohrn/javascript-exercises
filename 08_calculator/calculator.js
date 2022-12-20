const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  let prod = 1;
  for (num of arr) {
    prod = prod * num;
  }
  return prod;
};

const power = function (base, exp) {
  let res = 1;
  for (let i = 1; i <= exp; i++) {
    res *= base;
  }
  return res;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
