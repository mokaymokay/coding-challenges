// This program, given an array of directions for a walk (eg. ['n', 's', 'w', 'e']), determines whether
// (1) the walk is exactly ten minutes long and (2) takes you to back the starting point.

// Time complexity: O(n)
// Space complexity: O(n)

const isVaildWalk = (directions) => {
  if (directions.length !== 10) return false
  const count = {}
  for (let direction of directions) {
    count[direction] === undefined? count[direction] = 1 : count[direction] += 1
  }
  return count['n'] === count['s'] && count['w'] === count['e']
}

module.exports = isVaildWalk