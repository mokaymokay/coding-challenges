// Given a list of words with one rotation point (where order restarts alphabetically), return the rotation point.

// Time complexity: O(log n)
// Space complexity: O(1)

const findRotationPoint = (arr) => {
  let floor = 0
  let ceiling = arr.length - 1
  // start with first two elements so we enter loop at least once
  let current = 1
  // exit while loop if current > previous
  while(arr[current] > arr[current - 1]) {
    // set current using half way point
    current = Math.floor((floor + ceiling)/2)
    // if current < floor, rotation point is less than current
    if (arr[current] < arr[floor]) {
      ceiling = current - 1
      // if current > floor, rotation point is greater than current
    } else {
      floor = current + 1
    }
  }
  return current
}

module.exports = findRotationPoint