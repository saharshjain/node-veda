// Given an array comprised of 0s, 1s and 2s we have to sort the array
// e.g. Input = [0,1,0,2,1,0,2,1,2,2,1,0,2,1,1,2,1]
// Output should be[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2]

function sort012(array) {
  let zero_counter = 0;
  let one_counter = 0;
  let two_counter = array.length - 1;

  while (one_counter <= two_counter) {
    if (array[one_counter] == 0) {
      [array[zero_counter], array[one_counter]] = [array[one_counter], array[zero_counter]];
      zero_counter++;
      one_counter++;
    } else if (array[one_counter] == 1) {
      one_counter++;
    } else if (array[one_counter] == 2) {
      [array[one_counter], array[two_counter]] = [array[two_counter], array[one_counter]];
      two_counter--;
    }
  }
  return array;
}
console.log(sort012([0, 1, 0, 2, 1, 0, 2, 1, 2, 2, 1, 0, 2, 1, 1, 2, 1]));