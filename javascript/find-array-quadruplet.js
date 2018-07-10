// This function returns an array of the first four elements of a given array that,
// when sorted, sum up to a given amount.

// Time complexity: O(n^3)
// Space complexity: O(1)

const findArrayQuadruplet = (arr, s) => {
  let len = arr.length
  // if length is less than 4, quadruplet cannot exist
  if (len < 4) { return [] }
  if (len >= 4) {
    let sum = arr.reduce( (acc, cur) => { return acc + cur } )
    // if length is 4, check sum against amount
    if (len === 4) { return sum === s ? arr : [] }
    // if amount is greater than sum, return empty array
    if (s >= sum) { return [] }
  }
  // sort
  arr.sort()
  for (let i = 0; i < len - 4; i++) {
    for (let j = i + 1; j < len - 3; j++) {
      // store complementing sum
      let cs = s - (arr[i] + arr[j])
      // check for sum in subarray
      let low = j + 1, high = len - 1;
      while (low < high) {
        if (arr[low] + arr[high] < cs) {
          low++
        } else if (arr[low] + arr[high] > cs) {
          high--
        } else {
        return [arr[i], arr[j], arr[low], arr[high]]
        }
      }
    }
  }
  return []
}

console.log(findArrayQuadruplet([], 5)) // should return []
console.log(findArrayQuadruplet([5,5,5], 3)) // should return []
console.log(findArrayQuadruplet([5,5,5,5], 20)) // should return [5,5,5,5]
console.log(findArrayQuadruplet([2,7,4,0,9,5,1,3], 20)) // should return [0,4,7,9]
console.log(findArrayQuadruplet([2,7,4,0,9,5,1,3], 120)) // should return []
console.log(findArrayQuadruplet([1,2,3,4,5,9,19,12,12,19], 40)) // should return [4,5,12,19]
