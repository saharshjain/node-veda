//generate subsets of a string using recursive solution


function generateSubsetsRecursive(str, auxString, index) {

  if (index == str.length) {
    console.log(auxString);
    return;
  }
  generateSubsetsRecursive(str, auxString, index + 1);
  generateSubsetsRecursive(str, auxString + str[index], index + 1);
}
generateSubsetsRecursive("ABC", '', 0);