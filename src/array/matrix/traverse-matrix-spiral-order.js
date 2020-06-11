  // Given an array we ahve to traaverse an array in spiral form
  //for e.g. matrix ->
  //[1,2,3
  // 4,5,6
  // 7,8,9]
  //then solution would be => 1,2,3,6,9,8,7,4,5(clockwise)

  function spiralOrderMatrixTraversal(array) {
    let m = array.length;
    let n = array[0].length;

    let TOP = 0,
      RIGHT = n - 1,
      LEFT = 0,
      BOTTOM = m - 1;
    let direction = 0;

    while (TOP <= BOTTOM && LEFT <= RIGHT) {
      if (direction == 0) {
        for (let i = TOP; i <= RIGHT; i++) {
          console.log(array[TOP][i]);
        }
        TOP++;
        direction = 1;
      } else if (direction == 1) {
        for (let i = TOP; i <= BOTTOM; i++) {
          console.log(array[i][RIGHT]);
        }
        RIGHT--;
        direction = 2;
      } else if (direction == 2) {
        for (let i = RIGHT; i >= LEFT; i--) {
          console.log(array[BOTTOM][i]);
        }
        BOTTOM--;
        direction = 3;
      } else if (direction == 3) {
        for (let i = BOTTOM; i <= TOP; i++) {
          console.log(array[i][LEFT]);
        }
        LEFT++;
        direction = 0;
      }

    }
    return;
  }

  spiralOrderMatrixTraversal([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
  ]);