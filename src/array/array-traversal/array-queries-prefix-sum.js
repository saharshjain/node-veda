//given multiple sum queries in an array calculate responses in o(1)

//using prefix sum

function arrayQueries(queryArray, arr) {
  //calculate prefix array sum
  let prefixArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefixArray[i] = arr[i] + prefixArray[i - 1];
  }
  queryArray.forEach((query) => {
    if (query[0] == 0) {
      console.log(`Sum of ${query}  =>  ${prefixArray[query[1]]}`);
    } else {
      console.log(`Sum of ${query}  =>  ${prefixArray[query[1]]-prefixArray[query[0]-1]}`);
    }
  });


}

arrayQueries([
  [1, 2],
  [3, 6],
  [1, 4],
  [0, 6],
  [1, 3],
  [2, 5]
], [1, 2, 3, 4, 5, 6, 7, 8, 9])