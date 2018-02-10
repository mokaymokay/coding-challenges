/*
Write a method that takes an array of consecutive (increasing) letters as input
and that returns the missing letter in the array.

You will always get an valid array, and it will be always exactly one letter be
missing. The length of the array will always be at least 2.

The array will always contain letters in only one case.

**Examples**

- INPUT: ['a','b','c','d','f']
- OUTPUT: 'e'

- INPUT: ['O','Q','R','S']
- OUTPUT: 'P'

*/

function findMissingLetter(input) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const isLowerCase = input[0] === input[0].toLowerCase();
  input = input.map(letter => letter.toLowerCase());
  var startingLetterIndex = alphabet.indexOf(input[0]);
  newArray = [];
  for (i = 0; i < (input.length + 1); i++) {
    newArray.push(alphabet[startingLetterIndex + i]);
  }
  output = newArray.filter(x => !input.includes(x)).toString();
  return isLowerCase ? output : output.toUpperCase();
}

findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);
