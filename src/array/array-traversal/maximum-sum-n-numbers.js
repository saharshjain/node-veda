//Given an array we have to find maximum that could eb obtained by adding any N amount of numbers
// e.g. input [2,4,3,1,5,6,9] , N = 2 , max sum would be  = 9+6 = 15;
// we can only pick edges not from middle and it has to be contiguous


function maximumSumNNumbers(arr, noOfElements) {
  let max = 0;
  //iterating from 0 from left side and all from right
  //to picking all from left and 0 from right
  for (let i = 0; i < noOfElements + 1; i++) {
    let sum = 0;
    //sums left values
    for (let j = 0; j < noOfElements - i; j++) {
      sum += arr[j]
    }
    //sums right values
    for (let j = arr.length - 1; j >= arr.length - i; j--) {
      sum += arr[j]
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max
}

//answer 6253
// console.log(maximumSumNNumbers([-533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35], 48));
console.log(maximumSumNNumbers([1, 2, 3, 4, -5], 4));