// Rotate an array by n places
//If we have to rotate an array by 5 places
// [1,2,3,4,5,6,7,8] will become [6,7,8,1,2,3,4,5]
//array rotation using reversal algorithm


function arrayRotation(noOfShift) {
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  noOfShift = noOfShift % array1.length;
  //this could be done in single step but done in different steps for clarity
  let reversePart1 = array1.slice(0, noOfShift).reverse(); //[3, 2, 1]
  let reversePart2 = array1.slice(noOfShift, array1.length).reverse(); //[12, 11, 10, 9, 8, 7, 6, 5]
  let reverseArray1 = reversePart1.concat(reversePart2);
  //solution is obtained by reversing the concatenated array
  reverseArray1 = reverseArray1.reverse();
  //printing solution
  console.log(reverseArray1);
}
arrayRotation(11);


//alternate reversal function if library functions are prohibited
// using start and end position as splicing wont be allowed
// function reverseArray(arrayRev, start, end) {
//   if (start < 0) {
//     start = 0;
//   }
//   if (end > arrayRev.length) {
//     end = arrayRev.length - 1;
//   }
//   while (start < end) {
//     let temp = arrayRev[start];
//     arrayRev[start] = arrayRev[end];
//     arrayRev[end] = temp;
//     start++;
//     end--;
//   }
//   return array;
// }
// reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 0, 3);