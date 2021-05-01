// fnd the sum of n natural number using tail recursion

function naturalNumberSumTailRecursion1(num, sum) {
  if (num == 0) {
    console.log(sum);
    return;
  }
  return naturalNumberSumTailRecursion1(num - 1, sum + num);
}
naturalNumberSumTailRecursion1(120, 0);