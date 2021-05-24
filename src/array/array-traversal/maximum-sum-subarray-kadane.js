// find the maximum sum of subarray in a given subarray

function maxSumSubArr(arr) {
  let result = arr[0];
  let maximumSumEnding = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maximumSumEnding = Math.max((maximumSumEnding + arr[i]), arr[i])
    result = Math.max(result, maximumSumEnding);
  }
  return result;
}
console.log(maxSumSubArr([1, -2, 3, 10, -4, 5]));