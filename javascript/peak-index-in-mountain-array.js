// This program returns the peak of an array of values.

// Time Complexity: O(n)
// Space Complexity: O(1)

const peakIndexInMountainArray = (arr) => {
  let index = Math.floor(arr.length/2)
  while (!(arr[index - 1] < arr[index] && arr[index] > arr[index + 1])) {
    if (arr[index + 1] < arr[index]) {
      index -= 1;
    } else {
      index += 1;
    }
  }
  return index
}

console.log(peakIndexInMountainArray([0,1,3,5,3,1,0]));
console.log(peakIndexInMountainArray([0,1,3,4,10,7,0]));
