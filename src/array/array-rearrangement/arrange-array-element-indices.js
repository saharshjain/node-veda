// Given an array we have to rearrange it in such a way that it is array[index] = index
// for element which are not present we have to put -1 as element

function rearrangeArrayElementsIndices(array) {
  for(let i = 0;i<array.length;i++){
	  while(array[i] != i && array[i]!= -1){
		let temp  = array[i];
		array[i] = array[temp];
		array[temp] = temp;
	  }

  	}


  return array;
}

console.log(rearrangeArrayElementsIndices([9,-1,-1,-1,6,5,-1,3,2,1]));
