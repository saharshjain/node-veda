//find the power set of a substring using recursion


function powerSetOfString(str, auxString, index) {
  if (index == str.length) {
    if (auxString.length == 0) {
      console.log("_");
      return;
    }
    console.log(auxString);
    return;
  }
  powerSetOfString(str, auxString, index + 1);
  powerSetOfString(str, auxString + str[index], index + 1);
}

powerSetOfString("ABC", "", 0);