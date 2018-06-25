// This function takes in a string and returns a new string with all vowels removed.

// time complexity: O(n)
// space complexity: O(n)
// where n = length of string

const disemvowel = str => {
  let vowels = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true,
    "A": true,
    "E": true,
    "I": true,
    "O": true,
    "U": true
  }
  let result = ""
  for (let char of str) {
    if (!vowels[char]) result += char
  }
  return result
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
