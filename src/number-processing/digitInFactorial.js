//Find the no. of digits in a factorial of a number


//using Kamenetsky’s formula
//f(x) = n* log10(( n/ e)) + log10(2*pi*n)/2

function digitInFactorial(num) {
  return Math.ceil(num * Math.log10(num / Math.E) + Math.log10(2 * Math.PI * num) / 2);
}


console.log(digitInFactorial(50000000));