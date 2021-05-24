//find the maximum sum of circular sub array

function maximumCircularSumSbArray(arr) {
  return Math.max(getMaxLinearSumArray(arr), getMaxCircularSumArray(arr));
}

function getMaxLinearSumArray(arr) {
  let result = arr[0];
  let maximumEnding = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maximumEnding = Math.max(maximumEnding + arr[i], arr[i]);
    result = Math.max(maximumEnding, result);
  }
  return result

}

function getMaxCircularSumArray(arr) {
  let sum = arr.reduce((a, b) => a + b);

  let result = arr[0];
  let maximumEnding = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maximumEnding = Math.min(maximumEnding + arr[i], arr[i]);
    result = Math.min(maximumEnding, result);
  }
  return sum - result;
}
console.log(maximumCircularSumSbArray([8, -4, 3, -5, 4]));