// This function takes in a string and returns a new string with all vowels removed.

const disemvowel = str => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let result = ""
  for (let char of str) {
    if (!vowels.includes(char)) result += char
  }
  return result
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
