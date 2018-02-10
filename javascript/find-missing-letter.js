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
  var first = input[0].charCodeAt(0);
  for (var i = 1; i < input.length; i++) {
    if (first + i !== input[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
}

findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);
