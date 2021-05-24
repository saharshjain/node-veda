// find the maximum length of consecutive subarray of odd and even nunbers


function consecutiveOddEvenSubArray(arr) {
  let result = 1;
  let current = 1;
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i - 1] % 2 == 0 && arr[i] % 2 == 1) || (arr[i - 1] % 2 == 1 && arr[i] % 2 == 0)) {
      current++;
      result = Math.max(current, result);
    } else {
      current = 1;
    }
  }
  return result;
}

console.log(consecutiveOddEvenSubArray([1, 2, 3, 4, 2, 6]));