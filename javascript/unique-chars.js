/*
Implement an algorithm to determine if a string has all unique characters without
using additional data structures.
*/

function uniqueChars(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (!newString.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString === string ? true : false;
}

console.log(uniqueChars("apple"));
console.log(uniqueChars("orange"));
