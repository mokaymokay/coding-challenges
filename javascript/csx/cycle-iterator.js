// This function accepts an array; upon each invocation, it will cycle through
// and return each element of the array one at a time, indefinitely.

const cycleIterator = array => {
  let count = -1
  const findElement = () => {
    if (count === array.length - 1) {
      count = -1
    }
    count += 1
    return array[count]
  }
  return findElement
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
