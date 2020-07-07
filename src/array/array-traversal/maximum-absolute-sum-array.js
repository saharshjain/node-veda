//given an array we need to find the maximum value of |Arr[i]-arr[j]|+|i-j|
//For example input = [1,3,-1] output should be 5 as i==2, j=3 i.e. |3 - (-1)| + |2 - 3| = 5

function maximumAbsoluteSum(arr) {
  let maxAdd = arr[0];
  let minAdd = arr[0];
  let minSub = arr[0];
  let maxSub = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxAdd < (arr[i] + i)) {
      maxAdd = arr[i] + i;
    }
    if (minAdd > (arr[i] + i)) {
      minAdd = arr[i] + i;
    }

    if (maxSub < (arr[i] - i)) {
      maxSub = arr[i] - i;
    }
    if (minSub > (arr[i] - i)) {
      minSub = arr[i] - i;
    }
  }
  return Math.max((maxAdd - minAdd), (maxSub - minSub));
}

console.log(maximumAbsoluteSum([1, 3, -1]));
console.log(maximumAbsoluteSum([0]));