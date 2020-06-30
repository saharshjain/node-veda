//Given coordinates of an infinite grid. We have to return minimum path to finish.
//We can move in any direction.
//e.g. input array1 = [0,6,2,3,2], array2 = [0,1,2,2,5];
// understanding input (x,y) are [(0,0),(6,1),(2,2),(3,2),(2,5)];
//output should be 14

function gridPathLength(A, B) {
  let pathLength = 0;
  for (let i = 0; i < A.length - 1; i++) {
    deltax = Math.abs((A[i + 1] - A[i]), 2);
    deltay = Math.abs((B[i + 1] - B[i]), 2);
    //since we can move diagonally too we dont need Euclidean distance
    pathLength += Math.max(deltax, deltay);
  }
  return parseInt(pathLength, 10);
}

console.log(gridPathLength([-7, -13], [1, -5]));
console.log(gridPathLength([0, 6, 2, 3, 2], [0, 1, 2, 2, 5]));