/*
Pig Latin is a game of alterations played on the English language. To create the
Pig Latin form of an English word the initial consonant sound is transposed to the
end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Check
out Wikipedia for more information on rules - try to get as close as possible.

Compose a JavaScript function that takes in a regular sentence or paragraph and
returns the Pig Latin equivalent.
*/

let piglatinizer = (word) => {
  let regex = /[aeiou]/gi;
  // if word begins with vowel
  if (word.search(regex) === 0) {
   newWord = word + "way";
  } else {
  // if word begins with consonant, check where the first vowel is and get index
  let vowelIndex = word.indexOf(word.match(regex)[0]);
  // place consonants in variable
  let consonants = word.substr(0, vowelIndex);
  // add components together
  newWord = word.substr(vowelIndex) + consonants + "ay";
  }
  return newWord;
}

console.log(piglatinizer("egg"));
console.log(piglatinizer("latin"));
console.log(piglatinizer("cheers"));
