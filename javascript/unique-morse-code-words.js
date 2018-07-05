// Time complexity: O(n**2)
// Space complexity: O(n)

const morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const uniqueMorseRepresentations = words => {
  let morseCodeAlphabet = {}
  for (let i = 0; i < 26; i++) { // O(1)
    morseCodeAlphabet[(i + 10).toString(36)] = morseCodeArray[i]
  }
  let transformations = new Set
  for (let word of words) { // O(n**2)
    let transformation = ''
    for (let char of word) {
      transformation += morseCodeAlphabet[char]
    }
    transformations.add(transformation)
  }
  return transformations.size
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
