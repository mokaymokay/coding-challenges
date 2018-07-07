// This function invokes a passed-in function with a passed-in argument as that
// function's first argument; the passed in function can have multiple arguments.

const defineFirstArg = (func, arg) => {
  return (...args) => {
    return func(arg, ...args)
  }
}

const subtract = function(big, small) { return big - small }
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

const add = function sum(x, y, z) { return x + y + z }
const addTo500 = defineFirstArg(add, 500)
console.log(addTo500(20, 0)); // should return 520
