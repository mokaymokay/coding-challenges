/*
JavaScript JumpStart Online: Rotate

Rotate an array to the right by a certain number of "steps".

For example, the array to rotate is: [1,2,3,4,5,6,7] and will be rotated 3 "steps".
The final array will look like: [5,6,7,1,2,3,4].

Notice the position of each index is shifted to the right by three places. The
first argument to the rotate function is the array to rotate; the second argument
is a number of​ steps.

**Examples**

- INPUT: rotate([22,11,500,92], 2);
- OUTPUT: [500, 92, 22, 11];

- INPUT: rotate([11,15,28,9,10], 0)
- OUTPUT: [11,15,28,9,10]

*/

function rotate(array, steps) {

  while (steps > 0) {
    popped = array.pop();
    array.unshift(popped);
    steps--;
  }
  return array;
}

rotate([22,11,500,92], 2);
rotate([11,15,28,9,10], 0);
rotate([5,2,0,13,14], 5);
