function binarySearch(array, low, high, searchValue) {
  if (high < low) {
    return -1;
  }
  let mid = parseInt(((low + high) / 2), 10); // necessary as can be a float in lot of situations
  if (array[mid] == searchValue) {
    return mid;
  }
  if (searchValue < array[mid]) {
    return this.binarySearch(array, low, (mid - 1), searchValue)
  }
  if (searchValue > array[mid]) {
    return this.binarySearch(array, (mid + 1), high, searchValue)
  }
}

module.export = {
  binarySearch
};