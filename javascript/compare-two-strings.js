// compareTwoStrings checks if two strings share any common substrings.

const compareTwoStrings = (s1, s2) => {
  let longer = s1, shorter
  if (s2 > s1) {
    longer = s2
    shorter = s1
  } else {
    shorter = s2
  }
  for (let char of shorter) {
    if (longer.includes(char)) return "YES"
  }
  return "NO"
}