// Given an array print the distinct elements in the array
// intput [0,6,8,2,3,7,6,4,8,2,5,4,7,3,2,7,6,8,4,9,7,8,1,2,6,4,9,1,5,4,7,6,9,1,2,5,3,4,6,7,9,5,4]
// output = [0,6,8,2,3,7,4,5,9,1]

function distinct_elements(array) {
  let element_counter = {};
  array.forEach((item, i) => {
    if (element_counter[item]) {
      element_counter[item]++;
    } else {
      element_counter[item] = 1;
      //can also be stored in a string to be displayed in single line
      console.log(item)
    }
  });
}

distinct_elements([0, 6, 8, 2, 3, 7, 6, 4, 8, 2, 5, 4, 7, 3, 2, 7, 6, 8, 4, 9, 7, 8, 1, 2, 6, 4, 9, 1, 5, 4, 7, 6, 9, 1, 2, 5, 3, 4, 6, 7, 9, 5, 4]);