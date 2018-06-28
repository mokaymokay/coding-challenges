// The binary search algorithm finds the position of n within a sorted array by
// comparing n to the middle element and chopping the list by half every time,
// i.e. "divide and conquer".

// time complexity: O(log n) aka log time
// space complexity: O(1)

const binarySearch = (array, n) => {
  // keep track of which part of list to search
  let low = 0
  let high = array.length - 1
  // while not yet narrowed down to one element
  while (low <= high) {
    // round up to integer
    let mid = parseInt((low + high) / 2)
    // check the middle element
    let guess = array[mid]
    // return index if guess is correct
    if (guess == n) {
      return mid
    // if guess is too low, keep searching within higher half
    } else if (guess < n) {
      low = mid + 1
    // if guess is too low, keep searching within lower half
    } else {
      high = mid - 1
    }
  }
  return null
}

console.log(binarySearch([0, 2, 5, 13, 14, 20, 52, 520, 1314], 520));
console.log(binarySearch([0, 2, 5, 13, 14, 20, 52, 520, 1314], 7));
