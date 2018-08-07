// Given a 6x6 2-dimensional array, return the highest hourglass sum, where an hourglass sum is defined as follows:
// a b c
//   d
// e f g

const hourglassSum = (arr) => {
  let answer = -Infinity
  let sum
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      sum = arr[i][j] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1]
      if (sum > answer) answer = sum
    }
  }
  return answer
}

module.exports = hourglassSum