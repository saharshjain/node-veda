//solve tower of hanoi for a given no. of disks using recursion.

function towerOfHanoi(num, a, b, c) {
  if (num == 1) {
    console.log(`Move 1 from ${a} to ${c}`);
    return;
  }
  towerOfHanoi(num - 1, a, c, b);
  console.log(`Move ${num} from ${a} to ${c}`);
  towerOfHanoi(num - 1, b, a, c);

}

towerOfHanoi(4, 'A', 'B', 'C');