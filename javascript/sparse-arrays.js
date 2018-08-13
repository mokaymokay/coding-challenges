// Given an array of strings and an array of queries, return an array of occurences for each query in the array of strings.

const sparseArrays = (strings, queries) => {
  const output = []
  for (let query of queries) {
    let count = 0
    for (let string of strings) {
      if (string === query) {
        count += 1
      }
    }
    output.push(count)
  }
  return output
}

module.exports = sparseArrays