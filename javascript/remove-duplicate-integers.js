/*
Given an array of integers, write a function that removes all duplicates from
the array.
*/

function removeDuplicates(arr) {
  let output = [];
  for (var i = 0; i < arr.length; i++) {
    if (!output.includes(arr[i])) {
      output.push(arr[i])
    }
  }
  return output;
}

console.log(removeDuplicates([1, 3, 5, 3, 7, 1]));
console.log(removeDuplicates([1, 20, 3, 10, 20, 3, 5, 3, 7, 1]));
