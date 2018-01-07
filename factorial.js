/*
JavaScript JumpStart Online: First Factorial

Create the function factorial(num) that returns the factorial of the parameter.
The factorial of n is denoted by n! and calculated by the product of integer
numbers from 1 to n. For n > 0, n! = 1*2*3*...*n. For n = 0, 0! = 1.

**Examples**

- INPUT: factorial(4);
- OUTPUT: 24

- INPUT: factorial(5);
- OUTPUT: 120
*/

function factorial(n) {
  var output = 1;
  for (n; n > 0; n--) {
    output *= n;
  }
  return output;
}

factorial(1);
factorial(4);
factorial(5);
