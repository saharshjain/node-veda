const {
  binarySearch
} = require('../util/search-functions');

//A sorted array has been rotated and we have to search a value
//Rotating  [1,2,3,4,5,6,7,8] by 5 places  will become [6,7,8,1,2,3,4,5]
//searching a sorted and rotated array


function searchRotatedArray(array, searchValue) {
  let pivotPosition = findPivot(array);
  if (pivotPosition == -1) {
    console.log("Not a rotated array.");
    return binarySearch(array, 0, array.length, searchValue);
  }
  if (array[pivotPosition] == searchValue) {
    return pivotPosition;
  }
  if (searchValue >= array[0] && searchValue < array[pivotPosition]) {
    return binarySearch(array, 0, pivotPosition - 1, searchValue);
  }
  return binarySearch(array, pivotPosition + 1, array.length, searchValue);
}
console.log(searchRotatedArray([4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3], 8));

function findPivot(array) {
  for (let i = 0; i < (array.length - 1); i++) {
    if (array[i + 1] < array[i]) {
      return i;
    }
  }
  return -1;
}
// console.log(findPivot([2, 3, 4, 5, 6, 7, 8, 1]));