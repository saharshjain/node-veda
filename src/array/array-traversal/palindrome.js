// find whether a number is palindrome or not


function isPalindromeByReversal(num) {
  let reversedNum = reverseANumber(num);
  if (num === reversedNum) {
    return true;
  }
  return false
}

function reverseANumber(num) {
  reversedNum = 0;
  while (num > 0) {
    reversedNum = (reversedNum * 10) + num % 10;
    num = parseInt(num / 10);
  }
  return +reversedNum;
}
console.log(isPalindromeByReversal(1234));