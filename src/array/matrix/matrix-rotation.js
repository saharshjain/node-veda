//Given a 2-D matrix We have to rotate the matrix outer ring
//for e.g. matrix ->
//[1,2,3
// 4,5,6
// 7,8,9]
//then solution would be
// [ 4, 1, 2 ]
// [ 7, 5, 3 ]
// [ 8, 9, 6 ]
//rotated it clockwise by 1 space


function rotateOuterMatrix(array) {
  console.log(array);
  let m = array.length;
  let n = array[0].length;
  let temp;
  for (let i = 0; i < m; i++) {
    if (array[i + 1] && array[i + 1][0]) {
      temp = array[i + 1][0];
      array[i + 1][0] = array[i][0];
      array[i][0] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    if (array[m - 1][i + 1] && array[m - 1][i + 1]) {
      temp = array[m - 1][i + 1];
      array[m - 1][i + 1] = array[m - 1][i];
      array[m - 1][i] = temp;
    }
  }
  for (let i = m - 1; i > 0; i--) {
    if (array[i - 1] && array[i - 1][n - 1]) {
      temp = array[i - 1][n - 1];
      array[i - 1][n - 1] = array[i][n - 1];
      array[i][n - 1] = temp;
    }
  }
  for (let i = n - 1; i > 1; i--) {
    if (array[m - 1][i - 1] && array[m - 1][i - 1]) {
      temp = array[0][i - 1];
      array[0][i - 1] = array[0][i];
      array[0][i] = temp;
    }
  }
  return array;
}

console.log(rotateOuterMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));