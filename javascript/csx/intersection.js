// This function compares input arrays and returns a new array with elements found
// in all of the inputs.

const intersection = arrays => {
  return arrays.reduce( (a,b) => {
    for (let i in a) {
      // remove element from a if element doesn't exist in b
      if (!b.includes(a[i])) a.splice(i, 1)
    }
    return a
  })
}

var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
