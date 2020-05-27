// Given an array we have to find the
// rotated result with O(n) time and O(1) space complexity
// we will be given multiple rotation length and single array
// input array = [1, 2, 3, 4, 5], shift array = [1, 3, 5, 7]
// output = [2, 3, 4, 5, 1], [4, 5, 1, 2, 3], [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]

function quickArrayRotationResult(array, shiftArray) {
  for (let i = 0; i < shiftArray.length; i++) {
    //using string vraiable to print in one line
    let str = "";
    for (let j = 0; j < array.length; j++) {
      str += array[(j + shiftArray[i]) % array.length];
    }
    console.log(str);
  }
}

quickArrayRotationResult([1, 2, 3, 4, 5], [1, 3, 5, 7]);