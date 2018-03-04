/*
Given a signature array and 'n', create a function that acts basically like the
Fibonacci sequence, but sums up the last 3 (instead of 2) numbers, and returns n
elements of the sequence, signature included.

If n = 0, return an empty array.
If n < 3, return the signature array.

**Examples**

- INPUT: tribonacci([1,1,1], 10)
- OUTPUT: [1,1,1,3,5,9,17,31,57,105])

- INPUT: tribonacci([0,0,1], 10)
- OUTPUT: [0,0,1,1,2,4,7,13,24,44]

- INPUT: tribonacci([1,2,3], 10)
- OUTPUT: [1,2,3,6,11,20,37,68,125,230]

*/

function tribonacci(signature, n) {
  if (signature.length < 3) return signature;
  if (signature.length > n) {
    while (signature.length > n) {
      signature.pop();
    }
  }
  while (signature.length < n) {
    let i = signature.length - 1;
    signature.push(signature[i] + signature[i-1] + signature[i-2]);
  }
  return signature;
}

console.log(tribonacci([1,1], 10));
console.log(tribonacci([0,0,1], 10));
console.log(tribonacci([1,2,3], 10));
console.log(tribonacci([100,200,300], 0));
console.log(tribonacci([1,1,1], 1));
