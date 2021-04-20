//Given an array of real numbers (floats too) we need to return 1 if there exists a triplet
//which satisfies the condition  1<a+b+c<2
//e.g. input  = [0.1,0.2,0.5,0.6,0.2] output = 1 (0.1+0.5+0.6)


function sumTriplet(A) {
  let start = 0;
  let end = A.length - 1;
  while (start != end) {
    let p = parseFloat(A[start]) + parseFloat(A[end]) + parseFloat(A[start + 1]);
    let q = parseFloat(A[start]) + parseFloat(A[end]) + parseFloat(A[end - 1]);
    if (((p > 1) && (p < 2)) || ((q > 1) && (q < 2))) {
      return 1;
    }
    start++;
    end--;
  }
  return 0;
}


console.log(sumTriplet(["2.673662", "2.419159", "0.573816", "2.454376", "0.403605", "2.503658", "0.806191"]));