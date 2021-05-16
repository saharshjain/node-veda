//find the maximum difference between arr[i] - arr[j] such that j>i

function maximumDifference(arr) {
  let difference = arr[1] - arr[0];
  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    difference = Math.max(difference, arr[i] - minValue);
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return difference;
}

console.log(maximumDifference([8, 1, 2, 6, 5, 7]));