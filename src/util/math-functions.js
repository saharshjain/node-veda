function calculateGCD(number1, number2) {
  if (number2 == 0) {
    return number1;
  } else {
    return calculateGCD(number2, number1 % number2);
  }
}

//chnage to enable it for all data types
function hammingDistanceArray(arrayOne, arrayTwo) {
  if (arrayOne.length != arrayTwo.length) {
    return -1;
  }
  let hammingDistance = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] != arrayTwo[i]) {
      hammingDistance++;
    }
  }
  return hammingDistance;
}

module.exports = {
  calculateGCD,
  hammingDistanceArray
}