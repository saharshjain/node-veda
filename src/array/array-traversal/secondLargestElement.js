//find the second largest element in the array

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  console.log(largest, secondLargest);
}
secondLargest([1, 27, 6, 54, 34, 56, 543, 4, 5, 48, 3, 2, 5, 63, 7, 8, 4, 9, 5]);