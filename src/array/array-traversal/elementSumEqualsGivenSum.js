// find a sub array of elements where currentSum is equal to given currentSum


function elementscurrentSumEqualsgivenSum(arr, givenSum) {
  let sum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > givenSum) {
      sum -= arr[start++];
    }
    if (sum == givenSum) {
      return [start, i];
    }
  }
  return -1;
}
console.log(elementscurrentSumEqualsgivenSum([8, 3, 7, 5, 3, 9, 7, 3, 6, 5, 8, 2, 9, 4, 5], 35));