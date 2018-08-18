const permuteUnique = (nums) => {
  let output = []
  let reversed = [...nums].reverse()

  const getPermutations = (arr) => {
    for (let index = 0; index < arr.length; index += 1) {
      let perm = [...arr]
      // pop off each element
      let current = perm.splice(index, 1)[0]
      // move to front to create starter perm
      perm.unshift(current)
      // add starter perm to output
      output.push([...perm])
      for (let iteration = 1; iteration < arr.length; iteration += 1) {
        // perform full rotations - take first element and move to back
        let first = perm.shift()
        perm.push(first)
        // add copy of perm to output
        output.push([...perm])
      }
    }
  }
  getPermutations(nums)
  getPermutations(reversed)
  return output
};

console.log(permuteUnique([1, 1, 2])) // [ [1, 1, 2], [1, 2, 1], [2, 1, 1] ]
console.log(permuteUnique([1, 1, 3, 4]))