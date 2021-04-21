// find factorial of a given number in different ways

function factorialRecursive(num) {
  if (num == 1)
    return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(10));

function factorialIterative(num) {
  let factorial = 1;
  while (num > 1) {
    factorial *= num--;
  }
  return factorial;
}
console.log(factorialIterative(10));