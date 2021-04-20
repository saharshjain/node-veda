// count the number of digits in a number

function countDigitsIterative(num) {
  let sum = 0;

  for (let i = +num; i > 0; i = parseInt(i / 10)) {
    sum += 1;
  }
  console.log(sum)
}
countDigitsIterative(123456);


function countDigitsRecursive(num) {
  if (num == 1) {
    return 1;
  }
  return 1 + countDigitsRecursive(parseInt(num / 10));
}
console.log(countDigitsRecursive(123456));


function countdigitsLogarithmic(num) {
  console.log(Math.ceil(Math.log10(num)))
}

countdigitsLogarithmic(123456);