//Have to rearrange array in such a form that all occuring zeroes are at the end
//while maintaining the array original order
//e.g. array = [1,0,0,3,0,2,0,1]
//output should be  = [1,3,2,1,0,0,0,0]

function zeroToEnd(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      if (index != i) {
        [arr[i], arr[index]] = [arr[index], arr[i]]
      }
      index++;
    }
  }
  console.log(arr);
}
zeroToEnd([1, 0, 0, 3, 0, 2, 0, 1]);