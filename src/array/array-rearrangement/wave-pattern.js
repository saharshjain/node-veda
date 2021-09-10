function printPattern(inputArray) {
  try {
    if (inputArray.length < 2) {
      return inputArray;
    }
    inputArray = inputArray.sort((a, b) => a - b); // manual sorting function to remove unpredicted errors
    let mid = parseInt(inputArray.length / 2);
    if (inputArray.length % 2) {
      mid += 1; //handling even elements in array
    }
    let resultArray = [];
    for (let i = 0; i < mid; i++) {
      resultArray.push(inputArray[i]);
      if (i + mid < inputArray.length) { // overflow check
        resultArray.push(inputArray[i + mid]);
      }
    }
    return resultArray;
  } catch (error) {
    console.error(error);
  }
}

let testCases = [
  [], //empty
  [1], //single element
  [1, 2], // double element
  [1, 1, 1, 1, 1, 1, 1, 1, 1], //similar elements
  [0, 0, 0, 0, 0, 0, 0, 0, 0], //similar elements but zeroes
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // sorted idfferent elements
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], // reverse sorted element

  //negative elements
  [-1, -1, -1, -1, -1], //similar negative
  [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], //reverse sorted negative no.
  [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10], // reverse sorted negative no. with 0

  //decimals
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0], // simple decimals
  [0.1, 0.1, 0.1, 0.1, 0.1], // simialr decimals
  [0.1, 0.2, 0.3, 0.4, 0.5], // decimals < 1
  [0.1, 1.1, 0.2, 2.2, 0.4, 4.4], // decimals
  [0, 0.1, 1.1, 0.2, 2.2, 0.4, 4.4], //decimals with 0
  [0.0000000000000009, 0.00000000000000031, 0.0000000000000009, 0.0000000000000001, 0.0000000000000061, 0.0000000000000004, 0.0000000000000021], //smaller decimals since node.js is unpredicatble in such cases

  // edge cases
  [-1, 1, -2, 2, -3, 3, -4, 4, -5, 5], // +/-ve numbers
  [0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5], // +/-ve numbers with 0
  [11, 1.0, 21, 2.0, 31, 3.0, 41, 4.0, 51, 5.0], // +ve numbers with decimals
  [-11, 1.0, -21, 2.0, -31, 3.0, -41, 4.0, -51, 5.0], // -ve numbers with decimals

  // corner cases
  [0, -0, 0, -0, 0, -0], // +/-ve  zeroes
  [1.0, 1.5, -1.0, -2.0, 2.0, 2.5, -3.0, 3.0, 3.5, -4.0, 4.0, 4.5, -5.0, 5.0, 5.5, -6.0, 6.0, 6.5], // +/-ve no. with decimals
  [-1.021, 1.230, -2.0432, 2.02342, -3.04234, 3.024234, -4.0345, 4.0435345, -5.02354, 5.053453], // +/-ve numbers with extra decimals

  // misc case
  ['a', 'b', 'c', 'd'], //characters(ASCII value based)
  ['@', '#', '^', '$', '*', '^', '-'], // special characters
];

//test driver code
for (let i = 0; i < testCases.length; i++) {
  const respArray = printPattern(testCases[i]);
  console.log("original array =>", testCases[i]);
  console.log("processed array =>", respArray);
  console.log("---");
}