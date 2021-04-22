//find the greates common divisor of 2 numbers using euclidean method
function basicEuclideanMethodGCD(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

console.log(basicEuclideanMethodGCD(45, 60));

function optimizedEuclideanMethodGCD(a, b) {
  if (b == 0) {
    return a;
  }
  return optimizedEuclideanMethodGCD(b, a % b);
}

console.log(optimizedEuclideanMethodGCD(100, 70));