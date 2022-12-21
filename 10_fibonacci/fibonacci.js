const fibonacci = function (index) {
  if (index < 0) {
    return "OOPS";
  }
  let fib = [];
  for (let i = 0; i < index; i++) {
    if (fib.length === 0) {
      fib.push(0, 1);
    } else {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
  }
  return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
