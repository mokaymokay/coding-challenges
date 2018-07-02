// This program counts the number of pairs that have a given difference in an
// unsorted array of integers.

// Time complexity: O(n)
// Space complexity: O(1)

const countPairsWithDiff = (nums, diff) => {
  let diffs = new Map()
  for (let n of nums) {
    diffs.set(n + diff)
  }
  let pairs = 0
  for (let n of nums) {
    // This built-in method of the hash table has the time complexity of O(1)
    if (diffs.has(n)) {
      pairs++
    }
  }
  return pairs
}

console.log(countPairsWithDiff([1,7,5,9,2,12,3],2));
