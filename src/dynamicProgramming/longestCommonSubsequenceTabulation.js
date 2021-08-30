//find lcs of 2 different string using tabulation
let dict = {};

function lcs(str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let table = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    table[i] = new Array(n + 1);
  }

  for (i = 0; i <= n; i++) {
    table[0][i] = 0;
  }
  for (i = 0; i <= m; i++) {
    table[i][0] = 0;
  }

  for (i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        table[i][j] = 1 + table[i - 1][j - 1];
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
      }
    }
  }
  return table[m][n];
}

console.log(lcs('abcdefghijkl', 'qqqqqqqabcdefqqqq'));