function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(let i=0;i<array.length;i++) {
      if (i+1 > array.length){
        continue;
      };
      if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      };
    };
  };
  return array;
};


// console.log(bubbleSort([1,3,6,3,7,8]));

function substrings(string) {
  result = []
  for(let i=0; i<string.length; i++) {
    for(let j=i+1; j<=string.length; j++) {
      result.push(string.slice(i,j));
    };
  };
  return result;
};

// console.log(substrings("racecar"));
