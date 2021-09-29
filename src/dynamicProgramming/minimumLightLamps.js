//find minimum light lamps needsed to light up all wblocks of street
//array elements give the # of blocks that lamp can light around it including itself.
//-1 means lamp is faulty

function minimumLightLamp(arr, n) {
  let min = 0;
  let max = 0;
  let total = 0;
  while (max < n) {
    for (let i = 0; i < arr.length; i++) {
      let L = i - arr[i];
      let R = i + arr[i];
      if (L <= min && R > max) {
        max = R;
      }
    }
    if (min == max) {
      return -1;
    }
    min = max;
    total++;
  }
  return total
}
console.log(minimumLightLamp([1, 2, 2, -1, 0, 1], 5));