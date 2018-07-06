// This function performs a callback that acts like a check on each element of an
// input array, and outputs an array of elements by prioritizing those that yielded
// a return value of true.

const prioritize = (arr, callback) => {
  let outputFalse = [], outputTrue = []
  for (let elem of arr) {
    callback(elem) ? outputTrue.push(elem) : outputFalse.push(elem)
  }
  return outputTrue.concat(outputFalse)
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
let tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
