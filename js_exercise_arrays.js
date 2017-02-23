Array.prototype.myUniq = function() {
  let result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });

  return result;
};

console.log([1,2,2,2,3,4,5].myUniq());

function twoSum(array) {
  result = [];
  for(let i=0; i<array.length; i++) {
    for(let j=i+1; j<array.length; j++) {
      if (array[i] + array[j] === 0) {
        result.push([i,j]);
      };
    };
  };
  return result;
};

// console.log(twoSum([-1,0,2,-2,1]));
function myTranspose(array) {
  result = new Array(array.length);

  for(let i=0; i< array.length; i++){
    result[i] = new Array(array.length);
  };

  for(let i = 0; i< array.length; i++){
    for(j = 0; j < array.length; j++){
      result[j][i] = array[i][j];
    };
  };

  return result;
};
let rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
// console.log(myTranspose(rows));
