//given an array we have to return another array in such a way that every other element is
//smaller then its neighbours.
//e.g. input  = [1,2,3,4], output can be [4,1,3,2] or [2,3,1,4] etc.



function wavePatternArray(A) {
  A = A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 1; i += 2) {
    //can use different function to swap
    //here I am using JS easy method to swap
    [A[i], A[i + 1]] = [A[i + 1], A[i]]
  }
  return A;
}

console.log(wavePatternArray([6, 17, 15, 13, 9]));
console.log(wavePatternArray([6, 17, 15, 13]));