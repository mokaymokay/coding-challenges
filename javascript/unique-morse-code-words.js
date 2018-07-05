// Time complexity: O(n**2)
// Space complexity: O(n)

const uniqueMorseRepresentations = words => {
  let morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let alphabets = []
  for (let i = 10; i < 36; i++) { // O(1)
    alphabets.push(i.toString(36))
  }
  let morseCodeAlphabet = {}
  for (let i in alphabets) { // O(1)
    morseCodeAlphabet[alphabets[i]] = morseCodeArray[i]
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
