const repeatString = function (string, amount) {
  let newString = "";
  if (amount < 0) {
    newString = "ERROR";
  } else {
    for (let i = 1; i <= amount; i++) {
      newString += string;
    }
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
