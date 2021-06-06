//given an array find three equal sum subarrays

function threeEqualSumSubarray(arr) {
  let sum = 0;
  //checkign is 3 equal sums are possible
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % 3 != 0) {
    return "3 equal parts are not possible."
  }
  let firstIndex = -1;
  let secondIndex = -1;
  let currentSum = 0;
  for (i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (firstIndex == -1 && currentSum == sum / 3) {
      firstIndex = i;
    }
    if (firstIndex != -1 && secondIndex == -1 && currentSum == 2 * (sum / 3)) {
      secondIndex = i;
    }
  }
  return [
    [0, firstIndex],
    [firstIndex + 1, secondIndex],
    [secondIndex + 1, arr.length]
  ];
}

console.log(threeEqualSumSubarray([1, 2, 3, 5, 1, 7, -1]));