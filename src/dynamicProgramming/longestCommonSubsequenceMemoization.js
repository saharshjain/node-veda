//find lcs of 2 different string using memoization
let dict = {};

function lcs(str1, str2, m, n) {
  if (dict[m + "-" + n] != undefined) {
    return dict[m + "-" + n];
  }
  if (m == 0 || n == 0) {
    dict[m + "-" + n] = 0;
  } else {
    if (str1[m - 1] == str2[n - 1]) {
      dict[m + "-" + n] = 1 + lcs(str1, str2, m - 1, n - 1);
    } else {
      dict[m + "-" + n] = Math.max(lcs(str1, str2, m - 1, n), lcs(str1, str2, m, n - 1));
    }
  }
  return dict[m + "-" + n];
}

console.log(lcs('abcdefghijkl', 'qqqqqqqabcdefqqqq', 12, 17));