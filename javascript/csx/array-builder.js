// This function takes in an object of words and counts, and returns an array with
// words as elements by 'count' number of times. The order of the elements in the
// array does not matter, but repeated elements should be grouped.

// time complexity: O(n + c)
// space complexity: O(n)
// where n = length of object and c = count to repeat each element

const arrayBuilder = obj => {
  let result = []
  for (let word in obj) {
    let count = obj[word]
    while (count > 0) {
      result.push(word)
      count -= 1
    }
  }
  return result
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []
