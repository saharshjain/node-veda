//given an array and different array ranges find the maximum occuring element

//works good only for <1000 elements
const MAX_LENGTH_ALLOWED = 1000;

function maximumOccuringElement(rangeArr) {
  let startingPosArr = rangeArr[0];
  let endPosArr = rangeArr[1];
  const MAX = Math.max(...endPosArr) + 2;

  if (MAX > MAX_LENGTH_ALLOWED) {
    return "Array overflow";
  }
  let arr = new Array(MAX);
  for (let i = 0; i < MAX; i++) {
    arr[i] = 0;
  }
  //incrementing desired and decrementing spare increments
  for (i = 0; i < startingPosArr.length; i++) {
    arr[startingPosArr[i]]++;
    arr[endPosArr[i] + 1]--;
  }
  //calculating prefix sarray and max element in it
  let max = arr[0];
  for (i = 1; i < MAX; i++) {
    arr[i] += arr[i - 1];
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maximumOccuringElement([
  [1, 2, 3, 4, 5, 6, 7],
  [5, 6, 7, 8, 9, 10, 11]
]));