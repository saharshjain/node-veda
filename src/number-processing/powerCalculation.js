//calculate power of  anumber using recursive and iteration solution


function calculatePowerRecursively(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  let temp = calculatePowerRecursively(base, parseInt(exponent / 2));
  temp = temp * temp;
  if (exponent % 2 == 0) {
    return temp;
  } else {
    return temp * base;
  }
}
console.log(calculatePowerRecursively(4, 3));

function calculatePowerIteratively(base, exponent) {
  let ans = 1;
  while (exponent > 0) {
    if (exponent % 2 != 0) { // if(exponent & 1)
      ans *= base;
    }
    base *= base;
    exponent = parseInt(exponent / 2); //exponent = exponent >> 1
  }
  return ans;
}

console.log(calculatePowerIteratively(2, 5));