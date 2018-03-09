/*
Pig Latin is a game of alterations played on the English language. To create the
Pig Latin form of an English word the initial consonant sound is transposed to the
end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Check
out Wikipedia for more information on rules - try to get as close as possible.

Compose a JavaScript function that takes in a regular sentence or paragraph and
returns the Pig Latin equivalent.
*/

let piglatinizer = (word) => {
  if (word.search(/[aeiou]/gi) === 0) {
    word += "way";
    console.log(word);
  }
}

piglatinizer("egg");
