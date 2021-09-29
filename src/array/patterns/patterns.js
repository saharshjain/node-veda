// *
// * *
// * * *
// * * * *
// * * * * *

function pattern1(num) {
  str = "";
  for (let i = 0; i < num; i++) {
    str += '* ';
    console.log(str);
  }
}
pattern1(5);


// A
// B B
// C C C
// D D D D
// E E E E E

function pattern2(num) {
  // console.log(String.fromCharCode(65));
  // console.log('A'.charCodeAt(0));

  let currentCharCode = 'A'.charCodeAt(0);
  let counter = 0;
  while (counter < num) {
    let str = "";
    for (let i = 0; i <= counter; i++) {
      str += String.fromCharCode(currentCharCode) + " ";
    }
    console.log(str);
    counter++;
    currentCharCode++;
  }

}
pattern2(5);


//inverted
// * * * * *
// * * * *
// * * *
// * *
// *


function pattern3(num) {
  let counter = num;
  while (counter) {
    let str = '';
    for (let i = counter; i > 0; i--) {
      str += '* ';
    }
    console.log(str);
    counter--;
  }
}
pattern3(5);



// inverted half pyramid
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


function pattern4(num) {
  let counter = num;
  while (counter) {
    let str = '';
    for (let i = counter; i > 0; i--) {
      str += (counter - i + 1) + " ";
    }
    console.log(str);
    counter--;
  }
}
pattern4(5);





//full pyramid
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

function pattern5(rows) {
  let i;
  let space;
  let k = 0;
  for (i = 1; i <= rows; i++, k = 0) {
    let str = '';
    for (space = 1; space <= rows - i; ++space) {
      str += "  "; //2 spaces
    }
    while (k != 2 * i - 1) {
      str += "* ";
      k++;
    }
    console.log(str);
  }

}
pattern5(5);



//         1
//       2 3 2
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5

function pattern6(rows) {
  let counter = rows;
  let level = 1;
  while (level <= rows) {
    let str = '';
    for (let i = counter; i >= 0; i--) {
      str += '  ';
    }
    let j = level;
    while (j < ((2 * level) - 1)) {
      str += ` ${j}`;
      j++;
    }
    while (j >= level) {
      str += ` ${j}`;
      j--;
    }
    level++;
    counter--;
    console.log(str);
  }
}
pattern6(5);

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

//inverted pyramid of *
function pattern7(rows) {
  let counter = rows;
  let level = 0;
  while (level < rows) {
    let str = '';
    for (let i = counter; i > counter - level; i--) {
      str += "  ";
    }
    for (let j = 0; j < ((2 * counter) - 1); j++) {
      str += ' *';
    }
    console.log(str);
    counter--;
    level++;
  }
}
pattern7(5);


//pascal's triangle
//           1
//         1   1
//       1   2   1
//     1   3   3    1
//   1  4    6   4   1
// 1  5   10   10  5   1

function pattern8(num) {
  let coef = 1;
  let space;
  for (let i = 0; i < num; i++) {
    let str = '';
    for (space = 1; space <= num - i; space++)
      str += ' ';
    for (let j = 0; j <= i; j++) {
      if (j == 0 || i == 0)
        coef = 1;
      else
        coef = coef * (i - j + 1) / j;
      str += " " + coef;
    }
    console.log(str);
  }
}

pattern8(5);