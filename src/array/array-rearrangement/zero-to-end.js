//Have to rearrange array in such a form that all occuring zeroes are at the end
//while maintaining the array original order
//e.g. array = [1,0,0,3,0,2,0,1]
//output should be  = [1,3,2,1,0,0,0,0]

function zeroToEnd(array) {
  let slow = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      if (slow < i) {
        slow = i;
      }
      while (array[slow] == 0 && slow < array.length) {
        slow++;
      }
      if (slow == array.length) {
        break;
      }
      [array[i], array[slow]] = [array[slow], 0];
    }
  }
  return array;
}
console.log(zeroToEnd([1, 0, 0, 3, 0, 2, 0, 1]));