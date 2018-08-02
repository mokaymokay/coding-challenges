// Given an array of two integers and a target, return an array of the indices of the two integers that
// add up to the target. 

module.exports = {
  twoSumIndex: function(ints, target) {
    for(let i = 0; i < ints.length; i += 1) {
      for(let j = 1; j < ints.length; j += 1) {
        if (ints[i] + ints[j] === target) return [i, j]
      }
    }
  }
}