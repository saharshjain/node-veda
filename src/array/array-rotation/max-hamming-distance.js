//Given an array we have to find the max hamming Distance possible
//from different iteration of the givnen array
//e.g. input  = [1,4,1], output = 2.
//explanation - https://www.geeksforgeeks.org/find-a-rotation-with-maximum-hamming-distance/

function calculateMaxHammingDistance(array) {
  //amazing article
  //https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  let clonedArray = [];
  for (let i = 0; i < array.length; i++) {
    clonedArray[i] = array[i];
    clonedArray[array.length + i] = array[i];
  }
  let maxHammingDistance = 0;
  let windowLength = array.length;
  for (i = 0; i < windowLength; i++) {
    let hammingDistance = 0;
    for (let j = i, k = 0; j < parseInt((array.length + i), 10); j++, k++) {
      if (array[k] != clonedArray[j]) {
        hammingDistance++;
      }
    }
    if (hammingDistance > maxHammingDistance) {
      maxHammingDistance = hammingDistance;
    }
  }
  return maxHammingDistance;
}

console.log(calculateMaxHammingDistance([1, 4, 1]));