// Implement fibonacci series using memoization which displays the nth number in fibonacci series starting with 0
// input n = 10
// output = 55
//JS file


let dict = {};

function fibonacciMemoization(n) {
  if (dict[n] == undefined) {
    if (n <= 1) {
      dict[n] = n;
    } else {
      dict[n] = fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2);
    }
  }
  return dict[n];
}

console.log(fibonacciMemoization(10));
