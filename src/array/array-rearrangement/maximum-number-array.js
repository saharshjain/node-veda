// An array of integers is given and we have to rearrange it in such a way that
// it displays the largest numbers possible
//input e.g. [1,3,4,90,2] , output = 904321


function maximumNumberArray(arr) {
  arr = arr.sort(fullNumberCompare);
  while (arr[0] == 0 && arr.length > 1) {
    //to remove zeroes form front in case of full 0 array
    arr.shift();
  }
  //returning as string, easier to read the number
  return arr.join('');
}

const fullNumberCompare = (a, b) => {
  //to compare numbers such as 91,912 in required way
  a = a.toString();
  b = b.toString();
  if (parseInt((a + b), 10) > parseInt((b + a), 10)) {
    return -1;
  }
  return 1;
}
console.log(maximumNumberArray([1, 3, 4, 90, 92, 9, 2]));
console.log(maximumNumberArray([0, 0, 0, 0, 0, 0]));
console.log(maximumNumberArray([0]));
console.log(maximumNumberArray([1, 1, 1, 1, 1, 2, 2, 1, 1]));