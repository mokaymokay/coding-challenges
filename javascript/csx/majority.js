// This function performs a callback (that returns true or false) on each element
// of an input array, and returns true only if a majority of the returned values
// is true, else returns false.

const majority = (array, callback) => {
  let results = {}
  for (let elem of array) {
    let output = callback(elem)
    if (results[output])
    	results[output] += 1
  	else {
      results[output] = 1
    }
  }
	return results[true] > results[false]
}

// Uncomment these to check your work!
var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
