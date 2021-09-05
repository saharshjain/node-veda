//edit a string using inert, deelte and replace ops to make ti equal to another strong


function editDistanceDP(str1, str2, m, n) {
  let arr = new Array(m + 1);
  let i, j;
  for (i = 0; i <= m; i++) {
    arr[i] = new Array(n + 1);
  }

  for (i = 0; i <= m; i++) {
    arr[i][0] = i;
  }
  for (i = 0; i <= n; i++) {
    arr[0][i] = i;
  }
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1];
      } else {
        arr[i][j] = 1 + Math.min(
          arr[i - 1][j],
          arr[i][j - 1],
          arr[i - 1][j - 1],
        )
      }
    }
  }
  return arr[m][n];
}
console.log(editDistanceDP("saharsh", "sangarsh", 7, 8));