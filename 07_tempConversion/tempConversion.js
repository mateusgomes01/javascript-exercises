const round = function(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(fahrenheit) {
  return round((fahrenheit - 32) * (5/9), 1);

};

const ctof = function(celsius) {
  return round((celsius * (9/5)) + 32, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
