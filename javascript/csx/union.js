// This function compares input arrays and returns a new array that contains all
// elements only once.

// Time complexity: O(n**2)
// Space complexity: O(1)

const union = arrays => {
  return arrays.reduce( (a,b) => {
    for (let element of b) {
      if (!a.includes(element)) a.push(element)
    }
    return a
  })
}

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
