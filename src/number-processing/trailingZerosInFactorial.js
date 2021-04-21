// find trailing zero in factorial of a number
//complexity theta log<sub>5</sub>n

function trailingZeroInFactorial(num) {
  let zeroCount = 0;
  for (let i = 5; i < num; i *= 5) {
    zeroCount += parseInt(num / i);
  }
  return zeroCount
}

console.log(trailingZeroInFactorial(1234));