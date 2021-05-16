//maximum profit that can be gained from stock tradin given stock price every day

function maxStockProfit(arr) {
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }
  return profit;
}

console.log(maxStockProfit([1, 2, 5, 2, 1, 6, 1, 8]));