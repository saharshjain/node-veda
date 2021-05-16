// Given an array the elements represent the wall height and water cna be logged between walls
// output should tell us the amount of water logged between walls
// Array input  = [3,2,1,2,5,3,8]
// output should be 6


function waterLogging(arr) {
  let lMaxArr = [arr[0]];
  let rMaxArr = [];
  let water = 0;
  for (let i = 1; i < arr.length; i++) {
    lMaxArr[i] = Math.max(lMaxArr[i - 1], arr[i])
  }
  rMaxArr[arr.length - 1] = arr[arr.length - 1];

  for (i = arr.length - 2; i >= 0; i--) {
    rMaxArr[i] = Math.max(rMaxArr[i + 1], arr[i])
  }
  for (i = 1; i < arr.length - 1; i++) {
    water += Math.min(lMaxArr[i], rMaxArr[i] - arr[i]);
  }
  return water;
}

console.log(waterLogging([3, 2, 1, 2, 5, 3, 8]));