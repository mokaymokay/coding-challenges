const Stack = require('./data-structures/Stack')

const decimalToBinary = (decNumber) => {
  const remStack = new Stack()
  let number = decNumber
  let binaryString = ''

  while (number > 0) {
    let rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

module.exports = decimalToBinary