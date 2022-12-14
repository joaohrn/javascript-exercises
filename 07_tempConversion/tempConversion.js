const convertToCelsius = function (tempFahren) {
  let tempCelsius = Math.round((((tempFahren - 32) * 5) / 9) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  tempFahren = Math.round(((tempCelsius * 9) / 5 + 32) * 10) / 10;
  return tempFahren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
