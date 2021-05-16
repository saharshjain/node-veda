//print leaders in an array
function printLeader(arr) {
  let currentLeader = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > currentLeader) {
      console.log(arr[i]);
      currentLeader = arr[i];
    }
  }
}

printLeader([1, 3, 2, 4, 10, 5, 6, 3, 2, 4, 5])