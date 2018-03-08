// Write a function to check if given number is prime.

function isPrime(n) {
  if (n !== 1) {
    for (let m = 2; m <= n/2; m++) {
      if (n%m === 0) return false;
    }
  } else {
    return false;
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(520)); // false
console.log(isPrime(173)); // true
console.log(isPrime(12345)); // false
