function range(start, end){
  let result = [start];

  if (start > end){
    return [];
  } else {
    result = result.concat(range((start+1), end));
  }

  return result;
}

// console.log(range(1,16));

function exp(b, n){
  if (n === 0 ){ return 1};

  return b * exp(b, n - 1);
}

// console.log(exp(2, 6));

function expEvenOrOdd(b, n){
  if (n === 0 ){ return 1};

  switch(n%2) {
    case 0:
      const temp = expEvenOrOdd(b, n / 2);
      return temp * temp;
    case 1:
      const temp2 = expEvenOrOdd(b, (n - 1) / 2);
      return b * temp2 * temp2;
  };
};

// console.log(expEvenOrOdd(2,6));

function fib(n) {
  if (n < 2) {return [1]};
  if (n === 2) {return [1,1]};

  let fibs = fib(n-1);
  let len = fibs.length;

  return fibs.concat(fibs[len-1] + fibs[len-2]);

}

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(4));

function binarySearch(array, target){

  if (array.length === 0){ return null };

  let midpoint = (array.length)/2;

  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint, array.length -1);

  if (target === array[midpoint]){
    return midpoint;
  }else if(target < array[midpoint]){
    return binarySearch(left, target);
  }else{
    if(binarySearch(right, target) === null){ return null; }
    return midpoint + binarySearch(right, target);

  };

}

// console.log(binarySearch([1,2,3,5,6], 4));


function mergeSort(array, cb) {
  if (array.length === 1){return array};

  let mid = Math.floor(array.length/2);

  let sortedLeft = mergeSort(array.slice(0,mid), cb);

  let sortedRight = mergeSort(array.slice(mid, array.length), cb);
  // console.log(sortedRight, "sortedRight");
  return merge(sortedLeft, sortedRight, cb);
}

function merge(left, right, cb) {
  let merged = [];

  while (left.length > 0 && right.length > 0) {

    if (cb(left[0], right[0])) {

      merged.push(right.shift());
    } else {

      merged.push(left.shift());
    };

  };
  return merged.concat(left, right);
};

// console.log(mergeSort([2,3,6,3,7,5,4], (el1, el2) =>  el1 > el2 ));

// console.log(merge([1,3], [2,5]));

function subset(array){
  if (array.length === 0) { return [[]] }
  let result = [];

  let last = array[array.length -1];
  let sets = subset(array.slice(0,array.length -1));

  sets.forEach (function(set){
    result.push(set.concat(last));
  });

  return sets.concat(result);

}

console.log(subset([]));
console.log(subset([1]));
console.log(subset([1,2,3]));
