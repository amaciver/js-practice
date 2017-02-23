function my_each(array, cb){

  array.forEach(cb);

  return array;
}

// my_each([1,2,3], function(el) {console.log(el)});
// my_each([1,2,3], (el) => console.log(el));

function my_map(array, cb){
  result = [];

  my_each(array, function(el){
    result.push(cb(el));
  });

  return result;
}

// console.log(my_map([1,2,3], (el) => el*2));

function my_inject(array, cb){
  let acc = array.shift();

  my_each(array, function(el){
    acc = cb(acc, el);
  });

  return acc;

}

// console.log(my_inject([1,2,3], (acc, el) => acc + el));
