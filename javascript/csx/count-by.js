// This function performs a callback on each element of an array and returns
// an object of the results and their counts.

let countBy = (arr, callback) => {
  return arr.reduce( (counted, elem) => {
    if (callback(elem) in counted) {
      counted[callback(elem)] += 1
    } else {
      counted[callback(elem)] = 1
    }
    return counted
  }, {})
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
let nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
