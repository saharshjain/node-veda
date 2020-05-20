//Given an array we have to find max sum that can be obtained by array[i] * i operation
//only rotation of array is allowed
//e.g. given array = [1,23,53,22,16,3,4] , max sum that can be obtained is


function findMaxSumRotationArray(array) {
  let arraySum = array.reduce((sum, current) => sum + current);
  let currentSum = array.reduce((sum, current, i) => {
    sum += current * parseInt(i);
    return sum;
  }, 0);
  let maxSum = currentSum;
  array.forEach((item, i) => {
    let sum = currentSum + arraySum - (array.length * array[array.length - i]);
    if (sum > maxSum) {
      maxSum = sum;
    }
  }, 0);
  return maxSum;
}

console.log(findMaxSumRotationArray([1,23,53,22,16,3,4]));
