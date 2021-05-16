// Rotate an array by n places

function arrayRotation(arr, noOfShift) {
  let temp = [];
  for (let i = 0; i < noOfShift; i++) {
    temp[i] = arr[i];
  }
  for (i = noOfShift; i < arr.length; i++) {
    arr[i - noOfShift] = arr[i];
  }
  for (i = 0; i < temp.length; i++) {
    arr[(arr.length - noOfShift) + i] = temp[i];
  }
  console.log(arr);
}

arrayRotation([1, 2, 3, 4, 5, 6, 7, 8], 3);