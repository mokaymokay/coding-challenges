// This function accepts an array of items and an array of callbacks; performs
// each of the callback functions on each of the items, and save the results as
// values in an object corresponding to the items (callback inputs) as keys.

const multiMap = (items, callbacks) => {
  let output = {}
  for (let item of items) {
    output[item] = []
    for (let callback of callbacks) {
      output[item].push(callback(item))
    }
  }
  return output
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
let items = ['catfood', 'glue', 'beer'];
let functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
