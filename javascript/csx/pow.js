// This function takes a base and an exponent and returns base to the power of exponent.

const pow = (base, exponent, output = 1) => {
  if (exponent === 0) { return output }
  while (exponent > 0) {
    output *= base
    exponent--
    return pow(base, exponent, output)
  }
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(0, 5)); // -> 0
console.log(pow(3, 0)); // -> 1
