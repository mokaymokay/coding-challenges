// This function is a recreation of JavaScript's built-in method .reduce() which
// accepts an array, a 'callback' function, and an initial value as parameters,
// reduces all elements to one value (which is returned) using the callback function.

const reduce = (array, callback, initial) => {
  let totals = callback(initial, array[0])
  for(let i = 1; i < array.length; i++) {
    totals = callback(totals, array[i])
  }
  return totals
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
