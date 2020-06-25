//Given a alrge interger represented as an array in the way that its digits are elements of the array
//we have to return the interger+1 value.
//e.g. 24413 will be represented as [2,4,4,1,3], answer -> [2,4,4,1,4]
//it is easy on small numbers but will be difficult on large numbers

function sumLargeIntegerArray(integerArray) {
  while (integerArray[0] == 0) {
    //removing zeroes in start
    integerArray.shift();
  }
  let carry = 1;
  //traversing in reverse
  for (let i = (integerArray.length - 1); i >= 0; i--) {
    let sum = integerArray[i] + carry;
    carry = parseInt((sum / 10), 10);
    integerArray[i] = parseInt((sum % 10), 10);
  }
  if (carry) {
    //adding carry in start
    integerArray.unshift(carry);
  }
  return integerArray;
}

console.log(sumLargeIntegerArray([2, 3, 4, 5, 6, 4]));
console.log(sumLargeIntegerArray([0, 0, 0, 0, 0, 0]));
console.log(sumLargeIntegerArray([9, 9, 9, 9]));
console.log(sumLargeIntegerArray([0]));