//find whether a number is prime or // NOTE:

function isPrime(num) {
  if (num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i < +(num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(23));

function isPrimeOptimised(num) {
  if (num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i < +Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeOptimised(23));


function isPrimeUltraOptimised(num) {
  if (num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i * i < num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeUltraOptimised(23));