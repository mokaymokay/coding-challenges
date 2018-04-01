/*
Given a positive number, create the smallest possible number by taking one digit
and changing its index.

Return [smallest number, old index , new index]

The indexes need to be as small as possible.

**Example**

- INPUT: smallest(261235);
- OUTPUT: [126235, 2, 0]
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

*/

function smallest(n) {
  let output = [];
  let original = ("" + n).split("").map(Number); // turn into array of numbers
  console.log(original);
  let sorted = original.slice().sort(); // create sorted copy
  console.log(sorted);
  let digitToMove;
  let indexFrom;
  for (let i = 0; i < original.length; i++) {
    if (sorted[i] !== original[i]) {
      digitToMove = sorted[i];
      indexFrom = original.lastIndexOf(sorted[i]); // get index of where to remove digit
      break;
    }
  }
  console.log(digitToMove);
  console.log(indexFrom);
  let newNum = original.slice(); // create copy of original
  newNum.splice(indexFrom, 1); // remove digit from copy of original
  console.log(newNum);
  let indexTo;
  if (digitToMove === 0) {
    indexTo = 0;
  } else {
    for (let i = 0; i < newNum.length; i++) { // locate where to insert digit
      if (newNum[i] < digitToMove && newNum[i + 1] > digitToMove) {
        indexTo = i + 1;
        break;
      } else if (newNum[i] === digitToMove && newNum[i + 1] > digitToMove) {
        indexTo = i;
      } else {
        indexTo = 0;
      }
    }
  }
  newNum.splice(indexTo, 0, digitToMove); // insert digit to copy of original
  console.log(newNum);
  console.log(indexTo);
  if (digitToMove === 0 && indexTo === 0 && indexFrom === 1) {
    output.push(Number(newNum.join("")), indexTo, indexFrom);
  } else {
    output.push(Number(newNum.join("")), indexFrom, indexTo);
  }
  return output;
}

console.log(smallest(261235));
console.log(smallest(209917));
console.log(smallest(285365));
console.log(smallest(269045));
console.log(smallest(296837));
console.log(smallest(1000000));
