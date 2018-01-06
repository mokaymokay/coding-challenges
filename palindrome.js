/*
JavaScript JumpStart Online: Palindrome

Have the function palindrome(str) accept a string argument, and return the
boolean true if the argument is a palindrome (meaning that the string is the
same forward as it is backward). Otherwise, return the boolean false.

**Examples**

- INPUT: palindrome("racecar");
- OUTPUT: true

- INPUT: palindrome("animal");
- OUTPUT: false
*/

function palindrome(str) {
  var str = str.toLowerCase(),
      newString = "";

  for(var i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  if (str === newString) {
    return true;
  } else {
    return false;
  }
}

palindrome("racecar");
palindrome("animal");
