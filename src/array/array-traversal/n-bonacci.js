//function to print nbonacci series

function nBonacci(n, len) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(0);
  }
  arr[n - 1] = 1;
  let start = 0;
  let end = n;
  let sum = 1;
  console.log(arr.length);
  while (end < len) {
    console.log(end, arr);
    arr[end++] = sum;
    sum = sum - parseInt(arr[start++], 10) + sum;
  }
  return arr;
}

console.log(nBonacci(4, 15));