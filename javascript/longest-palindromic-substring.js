// This program returns the longest possible palindrome contained within the given string.

// INPUT: "abaxyzzyxf"
// OUTPUT: "xyzzyx"

const longestPalindromicSubstring = (string) => {

  const createReverse = (string) => {
    let reverse = []
    for (let char of string) {
      reverse.unshift(char)
    }
    return reverse.join('')
  }

  const reverse = createReverse(string)

  const findMatch = (string, reverse, beg = 0, end = beg + 1) => {
    let regex = ''
    while (reverse.match(string.substring(beg, end))) {
      regex = string.substring(beg, end)
      end++
    }
    string = string.slice(end - 1)
    return {regex: regex, end: end - 1 }
  }

  while (string.length > 0) {
    let output = findMatch(string, reverse)['regex']
    if (findMatch(string, reverse, findMatch(string, reverse)['end'])['regex'].length > output.length) {
      output = findMatch(string, reverse, findMatch(string, reverse)['end'])['regex']
    }
    return output
  }
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
