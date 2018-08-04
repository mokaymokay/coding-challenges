// Given an array of two integers and a target, return an array of the indices of the two integers that
// add up to the target.

// Time complexity: O(n)
// Space complexity: O(n)

const twoSumIndex = (ints, target) => {
  let output = []
  // initiate object to keep track of indices, where the keys are integers and values are arrays of indices
  const indices = {}
  for (let intAndIndex of ints.entries()) { // O(n)
    let index = intAndIndex[0]
    let int = intAndIndex[1]
    indices[int] === undefined ? indices[int] = [index] : indices[int].push(index)
  }
  // sort from smallest to largest
  ints = ints.sort((a, b) => a - b) // O(log n)
  // find the numbers
  let currentIndex = 0
  let addendIndex = ints.length - 1
  while (target !== ints[currentIndex] + ints[addendIndex]) { // O(n)
    if (target > ints[currentIndex] + ints[addendIndex]) {
      currentIndex += 1
    }
    if (target < ints[currentIndex] + ints[addendIndex]) {
      addendIndex -= 1
    }
  }
  // get indices from object
  let current = ints[currentIndex]
  let addend = ints[addendIndex]
  current === addend ? output = indices[current] : output.push(indices[current][0], indices[addend][0])
  return output
}

module.exports = twoSumIndex