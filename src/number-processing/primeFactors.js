//Find prime factors of a number

function findPrimeFactor(num) {
  if (num < 1) {
    return false;
  }

  while (num % 2 == 0) {
    num = +(num / 2);
    console.log("2 ");
  }
  while (num % 3 == 0) {
    num = +(num / 3);
    console.log("3 ");
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0) {
      num = +(num / i);
      console.log(i + " ");
    }
    if (num % (i + 2) == 0) {
      num = +(num / (i + 2));
      console.log((i + 2) + " ");
    }
  }
  if (num > 3) {
    return num;
  }
}
console.log(findPrimeFactor(12345678));