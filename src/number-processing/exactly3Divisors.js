//find numbers with exactly 3 divisors less than a number

function exactly3Divisors(num) {

  for (let i = 0; i * i <= num; i++) {
    if (isPrime(i)) {
      console.log(i * i);
    }
  }
}


function isPrime(num) {
  if (num == 0 || num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  for (let i = 5; i * i < num; i += 6) {
    if (num % i == 0 || num % parseInt(i + 2) == 0) {
      return false;
    }
  }
  return true;
}

exactly3Divisors(100);