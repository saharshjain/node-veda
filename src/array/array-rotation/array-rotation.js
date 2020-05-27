const {
  calculateGCD
} = require('../../util/math-functions')

// Rotate an array by n places
//If we have to rotate an array by 5 places
// [1,2,3,4,5,6,7,8] will become [6,7,8,1,2,3,4,5]
//array rotation using juggling algorithm


function arrayRotation(noOfShift) {
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //if no of places to shift is bigger than length
  //then converted to the actual no. of places the array needs to be shifted
  noOfShift = noOfShift % array1.length;
  const GCD = calculateGCD(noOfShift, array1.length);
  for (let i = 0; i < GCD; i++) {
    let tempStorage = array1[i];
    let secondaryIterator = i;
    while (true) {
      let tempIterator = secondaryIterator + noOfShift;
      if (tempIterator >= array1.length) {
        tempIterator = tempIterator - array1.length;
      }

      if (tempIterator == i) {
        break;
      }
      array1[secondaryIterator] = array1[tempIterator];
      secondaryIterator = tempIterator;
    }
    array1[secondaryIterator] = tempStorage;
  }
  console.log(array1);

}

arrayRotation(3);