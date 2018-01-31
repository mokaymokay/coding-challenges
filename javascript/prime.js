/*
JavaScript JumpStart Online: Prime

The function prime(num) accepts a number argument and returns the boolean true
if the number is a prime number, otherwise it returns false.

**Examples**

- INPUT: prime(5);
- OUTPUT: true

- INPUT: prime(10);
- OUTPUT: false

*/

function prime(num) {
  var factors = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return (factors.length <= 2 ? true : false);
}

prime(11);
