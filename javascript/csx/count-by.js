// This function performs a callback on each element of an array and returns
// an object of the results and their counts.

const countBy = (arr, callback) => {
  let count = {}
  arr.forEach( (elem) => {
    if (count[callback(elem)]) {
      count[callback(elem)] += 1
    } else {
      count[callback(elem)] = 1
    }
  })
  return count
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
var nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
