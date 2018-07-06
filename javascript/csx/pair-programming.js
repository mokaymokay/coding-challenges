// declare a variable called "numArr" which is an array containing the numbers
// 10, 20, and 30. then print it to the console
let numArr = [10, 20, 30]
console.log(numArr)

// define a function "multiplyBy2" that takes one number, multiplies it by 2,
// and returns that value
const multiplyBy2 = num => {
  return num * 2
}

// define a function "distanceFrom10" that takes one number and returns its
// distance from 10. the output should be greater than or equal to zero
// (e.g. passing 8 or 12 should both return a positive 2)
const distanceFrom10 = num => {
  return Math.abs(num - 10)
}

// define a function "map" which takes two arguments, an array and a callback
// function. "map" will iterate/loop through the array and pass each array element
// to the callback as an argument. Each output from the callback is pushed to a
// new array. "map" will return this new array. Please do not use the native
// .map() method.
const map = (arr, callback) => {
  let newArray = []
  for(let i=0; i < arr.length; i++) {
    newArray.push(callback(arr[i]))
  }
  return newArray
}

// use your "map" to find the distance from 10 of each number in numArr
console.log(map(numArr, distanceFrom10))

// define a function called "every" which takes two arguments, an array and a
// callback function. this callback can be considered a "test", as it will return
// true or false. "every" will iterate/loop through the array and pass each array
// element to the callback as an argument. if all outputs from the callback/test
// are true, every will return true. if any of the outputs is false, every will
// return false. Please do not use the native .every() method.
const every = (arr, callback) => {
   // for(let i = 0; i < arr.length; i++) {
   //   if (!callback(arr[i])) {
   //     return false
   //   }
   // }
   // return true

   // refactor your "every" function so that it uses the built-in "reduce" method.
  return arr.reduce( (acc, cur) => {
    if (!callback(cur)) { acc = false }
		return acc
  }, true)

}

// use your "every" to determine if every number in numArr is greater than 5.
// Then, run a second test with the array [10, -20, 30]
let greaterThanFive = num => { return num > 5 }

console.log(every([10, -20, 30], num => num > 5))

// define a function "fastCache" that takes one argument, a function, and returns
// a function. When invoked, fastCache creates a cache that tracks calls to the
// returned function, where each input is associated with its output. Every
// subsequent call to that returned function with the same argument will return
// the output directly from the cache, instead of invoking the original function
// again.
const fastCache = callback => {
  let cache = {}
  const cachedCallback = (...args) => {
    if (cache[...args] !== null) {
      return cache[...args]
    } else {
      cache[...args] = callback(...args)
    }
  }
  return cachedCallback
}

// create object fastCache - if arg is key, return value
// else run callback and store value in cache + return

const X = fastCache(cb)

X(5)
