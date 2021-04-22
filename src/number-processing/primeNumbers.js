//find whether a number is prime or // NOTE:

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < +(num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(23));


function isPrimeOptimised(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < +Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeOptimised(23));