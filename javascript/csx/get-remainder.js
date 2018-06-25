// This function returns the remainder of dividing the larger number by the
// smaller one.

function getRemainder(num1, num2) {
  return num1 > num2 ? num1%num2 : num2%num1
}

console.log(getRemainder(17, 5)); //=> 2
console.log(getRemainder(20, 5)); //=> 0
console.log(getRemainder(8, 22)); //=> 6
console.log(getRemainder(7, 42)); //=> 0
