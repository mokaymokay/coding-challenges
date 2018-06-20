// Write method to replace all spaces in string with '%20'. You may assume that
// the string has sufficient space to hold the additional characters, and you are
// given the "true" length of the string.

// - INPUT: urlify("Mr John Smith   ", 13);
// - OUTPUT: "Mr%20John%20Smith"

const urlify = (str, strLength) => {
  let newStr = ""
  let k = 0
  for (let i = 0; i < strLength; i++) {
    if (str[i] === " ") {
      newStr += str.substring(k, i) + "%20"
      k = i + 1
    }
  }
  return newStr += str.substring(k, strLength)
}

console.log(urlify("Mr John Smith   ", 13));
