//find the distinct element count in a subarray
//can be optimized
function distinctElementSubArray(arr, k) {
  let map = {};
  for (let i = 0; i < k; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  console.log(map);
  let count = 0;
  Object.keys(map).forEach((item, i) => {
    if (map[item] == 1) {
      count++;
    }
  });
  console.log(count);
  for (i = k; i < arr.length; i++) {
    if (map[arr[i - k]]) {
      map[arr[i - k]]--;
    }
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
    count = 0;
    Object.keys(map).forEach((item, i) => {
      if (map[item] == 1) {
        count++;
      }
    });
    console.log(count);
  }
}

distinctElementSubArray([1, 1, 2, 2, 3, 3, 4, 4, 5], 4)