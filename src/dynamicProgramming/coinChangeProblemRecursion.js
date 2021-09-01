//given infinite supply of an array of coins, find the total combination of coins that cna generate the given sum.


function coinChangeRecursion(coinArray, num, sum) {
  if (sum == 0) {
    return 1;
  }
  if (num == 0) {
    return 0;
  }
  let result = coinChangeRecursion(coinArray, num - 1, sum);
  if (coinArray[num - 1] <= sum) {
    result += coinChangeRecursion(coinArray, num, sum - coinArray[num - 1]);
  }
  return result;
}

console.log(coinChangeRecursion([1, 2, 3], 3, 5));