const balancedBrackets = (str) => {
  const brackets = {
    '{':'}',
    '[':']',
    '(':')',
  }
  const stack = []

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] in brackets) {
      stack.push(brackets[str[i]])
    } else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      if (stack.pop() !== str[i]) return 'NO'
    }
  }
  return stack.length === 0 ? 'YES' : 'NO'
}

module.exports = balancedBrackets