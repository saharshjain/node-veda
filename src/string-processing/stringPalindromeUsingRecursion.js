//check if a string is palindrome or not using recursion

function palindromeWithRecursion(str) {
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  return (str[0] == str[str.length - 1]) && palindromeWithRecursion(str.substring(1, str.length - 1));
}

console.log(palindromeWithRecursion("saharsh")); //immediately return false since first expression returns false
console.log(palindromeWithRecursion("andaadna"));