// This function uses isSubstring to determine if a given string is a rotation
// of the other.

const isSubstring = (str1, str2) => {
  return str1.indexOf(str2) >= 0
}

const isRotated = (str1, str2) => {
  let len = str2.length
  if (str1.length !== len) { return false }
  let index = 0
  // locate first letter of str1 in str2
  while (str1[0] !== str2[index]) {
    index++
  }
  // create "front" of comparison string
  let front = str2.slice(index, len - index)
  // create "back" of comparison string
  let back = str2.slice(0, index)
  return isSubstring(str1, front.concat(back))
}

console.log(isRotated("hello", "elloh"));
console.log(isRotated("hello", "heoll"));
