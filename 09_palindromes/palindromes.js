const palindromes = function (str) {
  let arr = str.toLowerCase().split(" ").join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "!" ||
      arr[i] == "." ||
      arr[i] == "?" ||
      arr[i] == "," ||
      arr[i] == ";" ||
      arr[i] == ":"
    ) {
      arr.splice(i, 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
