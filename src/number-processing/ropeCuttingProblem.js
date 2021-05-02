//given rope length and 3 cut sizes, what are the maximum pieces we can cut


function ropeCuttingProblem(totalLength, cutA, cutB, cutC) {
  if (totalLength == 0) {
    return 0;
  }
  if (totalLength < 0) {
    return -1
  }
  let cutCount = Math.max(
    ropeCuttingProblem(totalLength - cutA, cutA, cutB, cutC),
    ropeCuttingProblem(totalLength - cutB, cutA, cutB, cutC),
    ropeCuttingProblem(totalLength - cutC, cutA, cutB, cutC),
  )
  if (cutCount == -1) {
    return -1;
  }
  return cutCount + 1;
}

console.log(ropeCuttingProblem(20, 3, 2, 3));