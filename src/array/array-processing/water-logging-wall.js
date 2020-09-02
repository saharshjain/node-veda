// Given an array the elements represent the wall height and water cna be logged between walls
// output should tell us the amount of water logged between walls
// Array input  = [3,2,1,2,5,3,8]
// output should be 6


function waterLogging(arr) {
  let left_pointer = 0;
  let right_pointer = arr.length - 1;
  let left_max = 0;
  let right_max = 0;
  let waterVolume = 0;
  while (left_pointer <= right_pointer) {
    if (arr[left_pointer] < arr[right_pointer]) {
      if (arr[left_pointer] > left_max)
        left_max = arr[left_pointer];
      else
        waterVolume += left_max - arr[left_pointer];
      left_pointer++;
    } else {
      if (arr[right_pointer] > right_max)
        right_max = arr[right_pointer];
      else
        waterVolume += right_max - arr[right_pointer];
      right_pointer--;
    }
  }
  return waterVolume;
}

console.log(waterLogging([3, 2, 1, 2, 5, 3, 8]));