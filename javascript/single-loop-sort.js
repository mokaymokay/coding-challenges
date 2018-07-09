// With only one loop, this function combines two sorted arrays of unknown
// lengths and returns one sorted array.

// Time complexity: O(n), where n = length of shorter array
// Space complexity: O(n), where n = length of longer array

const singleLoopSort = (arr1, arr2) => {
  let currentIndex = 0, shorter = arr1, longer = arr2;
  if (arr2.length < arr1.length) {
    shorter = arr2
    longer = arr1
    }
  while (shorter.length > 0) {
    // if first element of shorter array >= current element of longer array, increment current index
    if (shorter[0] >= longer[currentIndex]) {
      currentIndex++
   } else {
      // otherwise, insert first element of shorter array into longer array at current index
      longer.splice(currentIndex, 0, shorter[0])
      // remove inserted element from shorter
      shorter.shift()
    }
  }
  return longer
}

console.log(singleLoopSort([1,2,5,6,8,11,12], [3,4,7,9,10]));
console.log(singleLoopSort([], [0,2,5]));
