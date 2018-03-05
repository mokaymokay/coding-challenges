/*
Write a Xbonacci function that takes a signature of x elements, adds next elements
by summing the last x elements until it has the length of n, and returns the sequence.

**Examples**

- INPUT: xbonacci([1,1,1,1], 10)
- OUTPUT: [1,1,1,1,4,7,13,25,49,94]

- INPUT: xbonacci([0,0,0,0,1], 10)
- OUTPUT: [0,0,0,0,1,1,2,4,8,16]

- INPUT: xbonacci([1,0,0,0,0,0,1], 10)
- OUTPUT: [1,0,0,0,0,0,1,2,3,6]

- INPUT: xbonacci([1,1], 10)
- OUTPUT: [1,1,2,3,5,8,13,21,34,55] (Fibonacci Sequence)

*/

function xbonacci(signature, n) {
  var result = [],
      x = signature.length,
      toAdd = [];
  for (let i = 0; i < n; i++) {
    if (result.length < x) {
      result.push(signature[i]);
    } else {
      toAdd = result.slice(result.length-signature.length, result.length);
      var sum = toAdd.reduce( function(a,b){return a + b} );
      result.push(sum);
    }
  }
  return result;
}

console.log(xbonacci([1,1,1,1], 10));
