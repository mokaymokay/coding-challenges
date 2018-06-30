// Given the position of an opening parenthesis in a sentence, this function returns
// the position of the corresponding closing parenthesis.

// Time complexity: O(n), where n = length of sentence
// Space complexity: O(1)

const parenthesisMatching = (str, opening_paren_index) => {
  // initiate variable to keep track of nested parentheses
  let nested_parens = 0
  // loop through string starting from opening parenthesis + 1
  for (let i = opening_paren_index + 1; i < str.length; i++) {
    // if character is opening parenthesis, add 1 to count
    if (str[i] === "(") {
      nested_parens += 1
    // if character is closing parenthesis, subtract 1 from count
    } else if (str[i] === ")") {
      // AND if not nested, just return index
      if (nested_parens === 0) return i
      nested_parens -= 1
    }
  }
}

console.log(parenthesisMatching("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)) // should return 79
console.log(parenthesisMatching("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 28)) // should return 46
