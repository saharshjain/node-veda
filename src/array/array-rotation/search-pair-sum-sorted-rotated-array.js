//Given a sorted and rotated array we have to find the pair of elements who have sum
//equivalent to given sum
//e.g. given array  = [5,6,7,8,9,1,2,3,4], sum  = 12
//output should be 3,9



function searchPairSumSortedRotated(array, sumValue) {
  let pivotPosition = findPivot(array);
  if (pivotPosition == -1) {
    return -1;
  }
  let low = (parseInt(pivotPosition, 10) + 1) % array.length;
  let high = pivotPosition;
  while (low != high) {
    let sum = array[low] + array[high];
    if (sum == sumValue) {
      return [array[low], array[high]];
    }
    if (sum < sumValue) {
      low = parseInt(low + 1, 10) % array.length;
    } else {
      high = (array.length + high - 1) % array.length
    }
  }
  return -1;
}

console.log(searchPairSumSortedRotated([5, 6, 7, 8, 9, 1, 2, 3, 4], 12));

function findPivot(array) {
  for (let i = 0; i < (array.length - 1); i++) {
    if (array[i] > array[i + 1]) {
      return i;
    }
  }
  return -1;
}