// Given an info string containing array length and number of rotations as well as an array string, return a string representing array elements after performing the given number of left rotations.

const leftRotation = (infoString, arrayString) => {
  let rotations = +infoString.split(' ')[1]
  const array = arrayString.split(' ').map((char) => +char)
  while (rotations > 0) {
    array.push(array.shift())
    rotations -= 1
  }
  return array.join(' ')
}

module.exports = leftRotation