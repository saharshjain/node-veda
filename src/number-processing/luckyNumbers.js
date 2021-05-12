//find numbers which remain on list after deleting every nth number

function isLucky(num, counter) {
  if (counter > num) {
    return 1;
  }
  if (num % counter == 0) {
    return 0;
  }
  num -= num / counter;
  counter++;
  return isLucky(num, counter);

}


console.log(isLucky(13, 2));
