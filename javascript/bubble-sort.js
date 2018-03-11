/*
The bubble sort is a sorting algorithm that iterates through each element of the
array multple times, comparing two adjacent elements at a time and swapping their
positions accordingly.
*/

let bubbleSort = (numbers) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i+1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i+1];
        numbers[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return numbers;
}

console.log(bubbleSort([5,2,0,1,3,1,4]));
