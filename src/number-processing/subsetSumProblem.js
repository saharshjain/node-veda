//given a set find the no. of subsets whose sum equals to given sum

function subsetSum(arr, index, sum) {
  if (index == 0) {
    if (sum == 0) {
      return 1;
    } else {
      return 0;
    }
  }
  return subsetSum(arr, index - 1, sum) + subsetSum(arr, index - 1, sum - arr[index - 1]);
}


console.log(subsetSum([1, 3, 4, 6], 4, 7));