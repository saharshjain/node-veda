// Given an array print the distinct elements in the array
// intput [3,7,3,6,3,6,2,5,2,5,1,4,1,4,2,3,2,3,2,8,2,5,8,5,8,6,8,6,8,6,5,6,5,5,3,5,3,4] and window is 4
// output =>
// Block 1 has following distinct elements => 3, 6, 7
// Block 2 has following distinct elements => 2, 3, 5, 6
// Block 3 has following distinct elements => 1, 2, 4, 5
// Block 4 has following distinct elements => 1, 2, 3, 4
// Block 5 has following distinct elements => 2, 3, 8
// Block 6 has following distinct elements => 2, 5, 8
// Block 7 has following distinct elements => 6, 8
// Block 8 has following distinct elements => 5, 6, 8
// Block 9 has following distinct elements => 3, 5
// Block 10 has following distinct elements => 3, 4

function distinct_elements_window(array, window) {
  let element_counter = {};
  array.forEach((item, i) => {
    let block = parseInt((i / window), 10);
    if (element_counter[block] && element_counter[block][item]) {
      element_counter[block][item]++;
    } else {
      if (!element_counter[block]) {
        element_counter[block] = {};
      }
      element_counter[block][item] = 1;
    }
  });
  console.log(element_counter);
  //displaying in user friendly format
  Object.keys(element_counter).forEach((item, i) => {
    str = 'Block ' + (parseInt(item, 10) + 1) + ' has following distinct elements => ' + Object.keys(element_counter[item]);
    console.log(str);
  });

}

distinct_elements_window([3, 7, 3, 6, 3, 6, 2, 5, 2, 5, 1, 4, 1, 4, 2, 3, 2, 3, 2, 8, 2, 5, 8, 5, 8, 6, 8, 6, 8, 6, 5, 6, 5, 5, 3, 5, 3, 4], 4);