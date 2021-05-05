//given a string print all permutations of a string

function printPermutations(str, i) {
  if (i == str.length - 1) {
    console.log(str + " ");
    return;
  }
  for (let j = i; j < str.length; j++) {
    str = swap(str, i, j);
    printPermutations(str, i + 1);
    str = swap(str, i, j);
  }
}

function swap(str, i, j) {
  let str_arr = str.split('');
  [str_arr[i], str_arr[j]] = [str_arr[j], str_arr[i]];
  return str_arr.join('');
}


printPermutations("ABCD", 0);