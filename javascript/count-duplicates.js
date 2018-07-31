// Write a function that will return the count of distinct case-insensitive alphabetic characters
// and numeric digits that occur more than once in the input string. The input string can be assumed
// to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Time complexity: O(n)
// Space complexity: O(n)

const duplicateCount = (text) => {
  const count = {}
  const distinct = new Set()
  text = text.toLowerCase()
  for (let char of text) {
    count[char] === undefined ? count[char] = 1 : distinct.add(char)
  }
  return distinct.size
}