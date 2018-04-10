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
  let output = arguments[3]; // undefined at first iteration

  if (arguments.length !== 4) {
    output = arr.slice(); // creates copy of arr at first iteration
  }

  if (output.length === 1) {
    return output[0] + accumulator;
  }

  output[0] = callback(output[0], output[1]);
  output.splice(1,1);
  return recursiveReduce(arr, callback, accumulator, output);
}

console.log(recursiveReduce(myArray, function(a,b) {return a + b}, 0));
console.log(recursiveReduce(myArray, function(a,b) {return a - b}, 0));
console.log(recursiveReduce(myArray, function(a,b) {return a * b}, 0));
console.log(recursiveReduce(myArray, function(a,b) {return a / b}, 0));
