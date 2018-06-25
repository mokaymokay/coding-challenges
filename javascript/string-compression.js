// This function compresses a string based on the number of repeated characters,
// where s can contain uppercase and lowercase letters.

const compress = s => {
  let s_len = s.length
  if (s_len <= 2) {
    return s
  }
  let count = 1
  let current = s[0]
  let result = ""
  for (let i = 1; i <= s_len; i++) {
    if(s[i] === current) {
      count++
    } else {
      result += current + count.toString()
      count = 1
      current = s[i]
    }
  }
  return result.length < s_len ? result : s
}

console.log(compress("aabcccccaaa"));
console.log(compress("aa"));
console.log(compress(""));
console.log(compress("abcd"));
