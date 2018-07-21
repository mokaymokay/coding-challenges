// fib(n) [0, 1, 1, ...]
// i.e. fib(2) returns 1

let sequence = {
  0: 0,
  1: 1
}

const lastKey = (obj) => {
  return +Object.keys(obj)[Object.keys(obj).length - 1]
}

const fib = (n) => {
  if (!sequence[n]) {
    while (n > lastKey(sequence)) {
      let last = lastKey(sequence)
      sequence[last + 1] = sequence[last] + sequence[last - 1]
    }
  }
  return sequence[n]
}

console.log(fib(5)); // 5
console.log(fib(10)); // 55
