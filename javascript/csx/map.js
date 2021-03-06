// This function is a recreation of JavaScript's built-in method .map() which
// accepts an array and a 'callback' function as parameters, performs the callback
// on each element of the array and returns the new array.

const map = (arr, callback) => {
  let result = []
  for (let n of arr) {
    result.push(callback(n))
  }
  return result
}

const subtractTwo = n => {
  return n - 2
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
