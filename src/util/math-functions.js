function calculateGCD(number1, number2) {
  if (number2 == 0) {
    return number1;
  } else {
    return calculateGCD(number2, number1 % number2);
  }
}

module.exports = {
  calculateGCD
}