//given an array find if the array has a subarray which ahs 0 sum

function zeroSumSubarray(arr) {
  let prefixArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefixArray[i] = arr[i] + prefixArray[i - 1];
    if (prefixArray[i] == 0 || prefixArray.indexOf(prefixArray[i]) != -1 && prefixArray.indexOf(prefixArray[i]) != i) {
      return true;
    }
  }
  return false;
}

console.log(zeroSumSubarray([1, 2, 3, -4, -2]));