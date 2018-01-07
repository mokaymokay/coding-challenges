/*
JavaScript JumpStart Online: Reverse a String

Create the function "reverseString" that reverses a string, and returns the
value of the reversed string.

NOTE: Do not use the .reverse() method

**Examples**

- INPUT: reverseString("hello");
- OUTPUT: 'olleh'
*/

function reverseString(str) {
  var output = "";
  for (var count = 1; count <= str.length ; count++) {
    output += str[str.length - count];
  }
  return output;
}

reverseString("hello");
reverseString("Fullstack Academy");
