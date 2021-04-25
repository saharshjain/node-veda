//find all divisors of a number in sorted order.

//prints in pair
function divisorsOsANumberUnsorted(num) {
  for (let i = 1; i * i <= num; i++) {
    if (parseInt(num % i) == 0) {
      console.info(i);
      if (i != parseInt(num / i)) {
        console.info(parseInt(num / i));
      }
    }
  }
}
console.info("Unsorted");
divisorsOsANumberUnsorted(100);

//print in sorted order
function divisorsOsANumberSorted(num) {
  for (var i = 1; i * i < num; i++) {
    if (parseInt(num % i) == 0) {
      console.info(i);
    }
  }

  for (; i > 0; i--) {
    if (parseInt(num % i) == 0) {
      console.info(parseInt(num / i));
    }
  }
}
console.log("--------------------------------------------------");
console.info("Sorted");
divisorsOsANumberSorted(100);