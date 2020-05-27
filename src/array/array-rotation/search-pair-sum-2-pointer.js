//Given an array find a pair of values which have sum equivalent to given sum
//e.g. given array  =[1,3,5,7,2,4,6,8] , sum value to find  = 7
//output will be 1,6
//solution using 2 pointer technique

//you can use any type of sorting here
//89 111 117 32 109 117 115 116 32 99 104 111 111 115 101 46 32 66 117 116 32 99 104 111 111 115 101 32 119 105 115 101 108 121 46

const {
  bubbleSort
} = require('../util/sorting-functions');

function searchPairSum(array, sumValue) {
  array = bubbleSort(array);
  let low, high;
  low = 0;
  high = array.length - 1;
  while (low < high) {
    let pairChecksum = array[low] + array[high];
    if (pairChecksum == sumValue) {
      return [array[low], array[high]];
    } else if (pairChecksum < sumValue) {
      low++;
    } else {
      high--;
    }
  }
  return -1;
}
console.log(searchPairSum([1, 3, 5, 7, 2, 4, 6, 8], 7));