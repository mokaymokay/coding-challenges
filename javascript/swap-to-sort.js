// This program accepts an array of unsorted, distinct integers as parameter, and
// determines if swapping two values will sort the array from lowest to highest.
// It returns 1 if possible; -1 if impossible; and 0 if it is already sorted.

// Time complexity: O(a), where a = length of array
// Space complexity: O(1)

const swapToSort = a => {
    let indices = []; // keep track of indices of elements
    let elements = 0; // keep track of number of elements
    // loop through array and store indices of each element greater than its next neighbor
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            // if there are more than two, it is impossible to swap to sort
            if (elements > 2) {
               return -1
            // if there is already one index, add index of current element's next neighbor
            } else if (elements === 1) {
                indices.push(i + 1)
                elements++
            // add index of current element
            } else {
                indices.push(i)
                elements++
            }
        }
    }
    // store sorted original array
    let sortedOriginal = [...a].sort(function(a,b) {
      return a - b
    })
    // make copy of array
    let arrayCopy = [...a]
    // if there are no elements, it is already sorted
    if (elements === 0) {
      return 0
    // if there are two elements, swap two elements whose indices have been stored
    } else if (elements === 2) {
        let temp = arrayCopy[indices[0]]
        arrayCopy[indices[0]] = arrayCopy[indices[1]]
        arrayCopy[indices[1]] = temp
    } else {
      // if there is one element, swap element whose index has been stored, and its next neighbor
        let temp = arrayCopy[indices[0]]
        arrayCopy[indices[0]] = arrayCopy[indices[0]+1]
        arrayCopy[indices[0]+1] = temp
    }
    // if not sorted after swapping compared to original, return -1
    for (let i in sortedOriginal) {
        if (arrayCopy[i] != sortedOriginal[i]) { return -1 }
    }
    // return 1 by default
    return 1
}

console.log(swapToSort([1,10,3,4,3]));
console.log(swapToSort([1,3,4]));
console.log(swapToSort([1,4,2]));
console.log(swapToSort([1,4,2,4,2]));
console.log(swapToSort([1,9,2,4,5]));
