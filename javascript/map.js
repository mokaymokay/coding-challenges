function map(array, callback) {
  let output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(callback(array[i]))
  }
  return output;
}

map([1,2,3], function(item) { return item * 2});
