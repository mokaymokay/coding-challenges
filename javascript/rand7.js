// You have a function rand5() that generates a random integer from 1 to 5. Use
// it to write a function rand7() that generates a random integer from 1 to 7.
// rand5() returns each integer with equal probability. rand7() must also return
// each integer with equal probability.

const rand5 = () => {
  return Math.floor(Math.random() * 5 + 1)
}

const rand7 = () => {
  const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0]
  ]
  let result = 0
  while (result === 0) {
    result = arr[rand5() - 1][rand5() - 1]
  }
  return result
}

console.log(rand7())
