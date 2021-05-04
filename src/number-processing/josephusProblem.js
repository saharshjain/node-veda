//Josephus problem kill every kth person from a total of nth person group and display survivor

function josephusProblem(n, k) {
  if (n == 1) {
    return 0;
  } else {
    return (josephusProblem(n - 1, k) + k) % n;
  }
}

console.log(josephusProblem(1, 3));