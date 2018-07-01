// The function objOfMatches builds an object by running a callback function on
// each element of the first array and comparing the result with the element in
// the same index position of the second array, where matching elements from the
// first array become the keys and those from the second array become the
// corresponding values of the object.

const objOfMatches = (arr1, arr2, callback) => {
  let output = {}
  for(let i in arr1) {
    if (callback(arr1[i]) == arr2[i]) {
      output[arr1[i]] = callback(arr1[i])
    }
  }
  return output
}

let arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
let arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
