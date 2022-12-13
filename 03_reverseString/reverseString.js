const reverseString = function (string) {
  let tempArray = string.split("");
  let newString = "";
  for (let i = tempArray.length - 1; i >= 0; i--) {
    newString += tempArray[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
