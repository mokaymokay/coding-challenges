const findRotationPoint = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) return i + 1
  }
}

module.exports = findRotationPoint