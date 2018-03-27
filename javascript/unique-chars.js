/*
Implement an algorithm to determine if a string has all unique characters without
using additional data structures.
*/

// function uniqueChars(string) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (!newString.includes(string[i])) {
//       newString += string[i];
//     }
//   }
//   return newString === string;
// }

function uniqueChars(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(uniqueChars("apple"));
console.log(uniqueChars("orange"));
