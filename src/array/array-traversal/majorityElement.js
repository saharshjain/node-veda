//function to find majority element

function findMajorityElement(arr) {
  let count = 1;
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res] == arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      res = i;
      count = 1;
    }
  }

  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[res] == arr[i]) {
      count++;
    }
  }
  if (count <= arr.length / 2) {
    return -1;
  }
  return arr[res];
}
console.log(findMajorityElement([8, 2, 2, 2, 8, 2, 2, 6, 6, 2, 8, 8, 2]));