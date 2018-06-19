/*
Given two strings, write a method to decide if one is a permutation of the other.

**Examples**

- INPUT: checkPermutation("apple","pleap")
- OUTPUT: true

- INPUT: checkPermutation("orange","tigers")
- OUTPUT: false

*/

const checkPermutation = (strA, strB) => {
  // return false if string lengths are different
  if (strA.length != strB.length) return false
  // initialize empty hashes
  let permA = {}, permB = {}
  // create hashes to store permutations in key value pairs
  for(let i = 0; i < strA.length; i++){
    permA[strA[i]] ? permA[strA[i]]++ : permA[strA[i]] = 1
    permB[strB[i]] ? permB[strB[i]]++ : permB[strB[i]] = 1
  }
  // compare hashes, return false if values do not match
  for (let i = 0; i < Object.keys(permA).length; i++){
    let key = Object.keys(permA)[i]
    if (permA[key] !== permB[key]) return false
  }
  return true
}

console.log(checkPermutation("apple","pleap"))
console.log(checkPermutation("orange","tigers"))
