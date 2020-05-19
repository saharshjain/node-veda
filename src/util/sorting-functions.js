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

// selectionSort([1, 9, 8, 7, 6, 8, 7, 6, 5, 7, 6, 5, 4, 3, 4, 8, 6, 5, 9, 8, 9, 8, 2, 3, 4, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3]);

module.exports = {
  selectionSort
};