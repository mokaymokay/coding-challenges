/*
The remainder operator, %, can be used to test whether a number is even or odd by
using % 2 to see whether it’s divisible by two.

Define a recursive function isEven corresponding to these descriptions: a) Zero
is even, b) One is odd, c) for any other number N, its evenness is the same as
N - 2.. The function should accept a single parameter (a positive, whole number)
and return a Boolean. Test it on 50 and 75. See how it behaves on -1, and try to
fix it.

*/

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven (num - 2);
  }
}

console.log(isEven(50)); // returns true
console.log(isEven(75)); // returns false
console.log(isEven(-1)); // returns false
