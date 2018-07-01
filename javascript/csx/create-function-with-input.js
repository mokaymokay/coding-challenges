// This function accepts an input and returns a anonymous function that returns
// the input that was passed to outer function. When we assign the function
// invocation with inputs to sampleFunc and helloFunc, we're really assigning
// the functionality of the anonymous function to those variables. Thus, those
// variables become functions as well.

const createFunctionWithInput = input => {
  return () => input
}

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'
