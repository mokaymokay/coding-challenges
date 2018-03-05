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
