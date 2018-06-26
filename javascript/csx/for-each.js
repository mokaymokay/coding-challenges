// forEach is a recreation of JavaScript's built-in method forEach that accepts
// an array and a callback function as parameters, and performs the callback on
// each element of the array.

// map is a (another) recreation of JavaScript's built-in method using the
// forEach that was created.

const forEach = (arr, callback) => {
  for (let n of arr) {
    callback(n)
  }
}

const map = (arr, callback) => {
  let result = []
  forEach(arr, e => result.push(callback(e)))
  return result
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
console.log(map(["a", "b", "c"], e => e.toUpperCase())); // should log: ['A', 'B', 'C']
