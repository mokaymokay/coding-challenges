/*
Given an array of integers, write a function that removes all duplicates from
the array.

- INPUT: removeDuplicates([1, 3, 5, 3, 7, 1])
- OUTPUT: [1, 3, 5, 7]
*/

let removeDuplicates = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!output.includes(arr[i])) {
      output.push(arr[i])
    }
  }
  return output;
}

console.log(removeDuplicates([1, 3, 5, 3, 7, 1]));

/* michael's solution changed to for loops */

let removeD = (arr) => {
  let arr2 = arr.slice();
  let i = 0;
  for (let i = 0; i < arr2.length; i++) {
    for (let k = i + 1; k < arr2.length; k++) {
      if (arr2[i] === arr2[k]) { arr2.splice(k, 1) }
    }
  }
  return arr2;
}

console.log(removeD([1, 3, 5, 3, 7, 1]));
