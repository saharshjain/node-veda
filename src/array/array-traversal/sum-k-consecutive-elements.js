//find the maximum sum of k consecutive elements

function maxKConsecutiveElementSum(arr, k) {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  let maxSum = currentSum;
  for (i = k; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - k];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(maxKConsecutiveElementSum([1, 4, 2, 5, 0, 6, 3, 3, 2, 3, 3, 4], 3));