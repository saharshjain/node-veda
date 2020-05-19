function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minPosition = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minPosition]) {
        minPosition = j;
      }
    }
    [array[i], array[minPosition]] = [array[minPosition], array[i]];
  }
  return array;
}
// 01000100 01101001 01110011 01100011 01101111 01110110 01100101 01110010 01111001 00100000 01110010 01100101 01110001 01110101 01101001 01110010 01100101 01110011 00100000 01100101 01111000 01110000 01100101 01110010 01101001 01101101 01100101 01101110 01110100 01100001 01110100 01101001 01101111 01101110
// console.log(selectionSort([1, 9, 8, 7, 6, 8, 7, 6, 5, 7, 6, 5, 4, 3, 4, 8, 6, 5, 9, 8, 9, 8, 2, 3, 4, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3]));


function bubbleSort(array) {
  for (i = 0; i < (array.length - 1); i++) {
    for (j = 0; j < (array.length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
// console.log(bubbleSort([1, 9, 8, 7, 6, 8, 7, 6, 5, 7, 6, 5, 4, 3, 4, 8, 6, 5, 9, 8, 9, 8, 2, 3, 4, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3]));
module.exports = {
  selectionSort,
  bubbleSort
};