let myArray = [1,2,3,4];

function reduce(arr, callback, accumulator) {
  let array = arr.slice();
  let iteration = arr.length - 1;
  for(let i = 0; i < iteration; i++) {
    array[0] = callback(array[0], array[1]);
    array.splice(1,1);
  }
  return array[0] + accumulator;
}

console.log(reduce(myArray, function(a,b) { return a + b }, 0));
console.log(reduce(myArray, function(a,b) { return a - b }, 0));
console.log(reduce(myArray, function(a,b) { return a * b }, 0));
console.log(reduce(myArray, function(a,b) { return a / b }, 0));

function recursiveReduce(arr, callback, accumulator) {
  if (arr.length === 1) { return }
  arr[0] = callback(arr[0], arr[1]);
  arr.splice(1,1);
  recursiveReduce(arr, callback, accumulator);
  return arr[0] + accumulator;
}

console.log(myArray);
console.log(recursiveReduce(myArray, function(a,b) {return a + b}, 0));
console.log(myArray);
console.log(recursiveReduce([1,2,3,4], function(a,b) {return a - b}, 0));
console.log(recursiveReduce([1,2,3,4], function(a,b) {return a * b}, 0));
console.log(recursiveReduce([1,2,3,4], function(a,b) {return a / b}, 0));
