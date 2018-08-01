// Given a collection of numbers, return an array of arrays in which the subarrays contains all the
// duplicate of a particular number. Subarrays should be in the same order as the first occurence of
// the number they contain.

module.exports = {
  groupDuplicateNums: function(array) {
    let output = []
    if (array === []) { return output }
    let count = {}
    let order = [...new Set(array)]
    for (let num of array) {
      count[num] === undefined ? count[num] = 1 : count[num] += 1
    }
    for (let num of order) {
      output.push(new Array(count[num]).fill(num))
    }
    return output
  }
}