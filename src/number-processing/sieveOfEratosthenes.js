//implement sieve of Eratosthenes

function sieveOfEratosthenes(num) {
  let arr = new Array(num).fill(true);
  for (let i = 2; i <= num; i++) {
    if (arr[i]) {
      console.log(i);
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

}

sieveOfEratosthenes(100);