//find if an array has a sum equilibrium

function hasEquilibrium(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let leftSum = 0;
  for (i = 0; i < arr.length; i++) {
    if (leftSum == (sum - arr[i])) {
      return true;
    }
    leftSum += arr[i];
    sum -= arr[i];
  }
  return false;
}

console.log(hasEquilibrium([1, -1, 3, 0]));