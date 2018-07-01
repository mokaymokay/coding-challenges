// This function creates a function that returns the string "hello world".

const createFunction = () => {
 return () => "hello world"
}

let myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
