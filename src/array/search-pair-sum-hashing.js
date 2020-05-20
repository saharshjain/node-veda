//given an array find a pair of values which have sum equivalent to the given sum
//e.g given array = [2,4,6,8,1,3,5,7,9], sum value to find  = 5
//output will be 1,4
//solution using hashing technique

function searchPairSumHashing(array, sumValue) {
  let hashes = {};
  for (let i = 0; i < array.length; i++) {
    if (hashes[sumValue - array[i]]) {
      return [sumValue - array[i], array[i]];
    } else {
      hashes[array[i]] = 1;
    }
  }
  return -1;
}

console.log(searchPairSumHashing([2, 4, 6, 8, 1, 3, 5, 7, 9], 5));