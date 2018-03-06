/*
Write a function that calculates the time it takes for all customers in a queue
to check out with self-checkout registers at the supermarket.

The function takes two input variables: an array containing integers that represent
the time it takes for each customer to check out, and n, the number of registers.

As soon as a customer finishes, the next customer in the queue moves to that register.

**Examples**

- INPUT: queueTime([5,3,4], 1)
- OUTPUT: 12
When n = 1, the total time is just the sum of the times.

- INPUT: queueTime([10,2,3,3], 2)
- OUTPUT: 10
The 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished.

- INPUT: queueTime([2,3,10], 2)
- OUTPUT: 12
*/

function queueTime(customers, n) {
    var queueArr = new Array(n).fill(0);
    for (var i = 0; i < customers.length; i++) {
      queueArr[0] += customers[i];
      queueArr.sort(function(a, b) { return a - b} ); // sort in ascending order
    }
    return queueArr[queueArr.length - 1];
  }

console.log(queueTime([5,3,4], 1));
console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4,5], 100));
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10], 2));
console.log(queueTime([4,5,3,6], 3));
