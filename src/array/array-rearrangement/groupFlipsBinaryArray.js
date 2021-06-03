//function to find out minimum flips to make binary array same

function groupFlipsBinaryArray(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] != str[i - 1]) {
      if (str[i] != str[0]) {
        console.log(`change ${i} to `);
      } else {
        console.log(i - 1);
      }
    }
  }
  if (str[str.length - 1] != str[0]) {
    console.log(str.length - 1);
  }
}
groupFlipsBinaryArray("11100011110001001")