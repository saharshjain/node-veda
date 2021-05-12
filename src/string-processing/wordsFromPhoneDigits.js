//Possible Words From Phone Digits
const CHARACTER_MAP = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
}

function wordsFromPhoneDigits(arr, auxString, index) {
  if (index == arr.length) {
    console.log(auxString);
    return;
  }
  for (let i = 0; i < CHARACTER_MAP[arr[index]].length; i++) {
    wordsFromPhoneDigits(arr, auxString + CHARACTER_MAP[arr[index]][i], index + 1);
  }
}

wordsFromPhoneDigits([2, 4, 7], '', 0);