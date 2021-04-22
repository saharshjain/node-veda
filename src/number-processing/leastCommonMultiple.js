//find LCM of 2 numbers

function leastCommonMultiple(a, b) {
  let gcd = optimizedEuclideanMethodGCD(a, b);
  return parseInt((a * b) / gcd);
}

function optimizedEuclideanMethodGCD(a, b) {
  if (b == 0) {
    return a;
  }
  return optimizedEuclideanMethodGCD(b, a % b);
}

console.log(leastCommonMultiple(4, 34));