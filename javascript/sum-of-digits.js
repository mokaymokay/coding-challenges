/*
JavaScript JumpStart Online: Sum of Digits

Create the function sumOfDigits that adds individual digits of a number, and
returns the sum.

**Examples**

- INPUT: sumOfDigits(414);
- OUTPUT: 9

- INPUT: sumOfDigits(2913);
- OUTPUT: 15
*/

function sumOfDigits(num){
  var num = num.toString(),
      sum = 0;

  for (var count = 0; count < num.length; count++) {
    sum += Number(num[count]);
  }
  console.log(sum);
}

sumOfDigits(414);
sumOfDigits(2913);
