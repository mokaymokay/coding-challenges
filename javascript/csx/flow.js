// This function takes a number and an array of functions and pipes the number
// through the functions.

const flow = (num, funcArray) => {
  if (funcArray.length === 0) return num;
  num = funcArray[0](num);
  funcArray.shift();
  return flow(num, funcArray);
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
