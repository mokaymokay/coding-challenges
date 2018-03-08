/*

Users on longer flights like to start a second movie right when their first one
ends, but they complain that the plane usually lands before they can see the
ending.

So you're building a feature for choosing two movies whose total runtimes will
equal the exact flight length.

Write a program that takes an integer flightLength (in minutes) and an array of
integers movieLengths (in minutes) and returns a boolean indicating whether
there are two numbers in movieLengths whose sum equals flightLength.

When building your method:
1. Assume your users will watch exactly two movies
2. Don't make your users watch the same movie twice

*/

// loop through entire array using index
// repeat process of adding 2 numbers together to check if equal to flightLength

function movieFlightChecker(movieLengths, flightLength) {
  // for loop through every element of array using index
  for (let i = 0; i < movieLengths.length; i++) {
    // at current index, make variable of firstMovie
    let firstMovie = movieLengths[i];
    // another for loop to loop through every element of array using index
    for (let j = i + 1; j < movieLengths.length; j++) {
      // at current index, make variable of secondMovie
      let secondMovie = movieLengths[j];
      // check if sum of firstMovie and secondMovie equals flightLength
      if (firstMovie + secondMovie === flightLength) return true;
      }
    }
  return false;
}

let movieLengths = [70,120,230,93,89,45,168,345]
let flightLength = 165

console.log(movieFlightChecker(movieLengths, flightLength)); //returns true
