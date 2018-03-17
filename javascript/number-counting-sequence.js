/*
The number counting sequence is a sequence of number strings that begins with:
["1", "11", "21", "1211", "111221", ...]

"1" is counted as "one 1" or "11", followed by
"11" which is counted as "two 1s" or "21", followed by
"1211" which is counted as "one 2 one 1" or "1211", and so on.

It helps to "say it out loud" to describe the item in the sequence.

Given an integer n, generate the n-th element in the number counting sequence.
*/

function numberCountingSeq(n) {

}

console.log(numberCountingSeq(0) === "");

console.log(numberCountingSeq(1) === "1");

console.log(numberCountingSeq(2) === "11"); //one 1 above

console.log(numberCountingSeq(3) === "21"); //two 1s above

console.log(numberCountingSeq(5) === "111221"); //the last sequence was one 1, one 2, and two 1s: "1211"

console.log(numberCountingSeq(8) === "1113213211");

console.log(numberCountingSeq(10) === "13211311123113112211");
