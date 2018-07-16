// This algorithm outputs an array of arrays that make up the Pascal's Triangle of n layer(s).

// Time complexity: O(n^2)
// Space complexity: O(n)

const pascalsTriangle = (n, output = []) => {
  while (n >= 0) {
    if (n === 0) {
      return output
    } else if (n === 1) {
      output.unshift([1])
      return pascalsTriangle(0, output)
    } else if (n === 2) {
      output.unshift([1,1])
      return pascalsTriangle(1, output)
    } else {
      // initialize layer with first '1'
      let layer = [1]
      prev = pascalsTriangle(n - 1)[n - 2]
      for (let i = 0; i < n - 2; i++) {
        layer.push(prev[i] + prev[i + 1])
      }
      // finish creating layer by adding the last '1'
      layer.push(1)
      // add layer to triangle
      output.unshift(layer)
    }
    return pascalsTriangle(n - 1, output)
  }
}

console.log(pascalsTriangle(0));
console.log(pascalsTriangle(1));
console.log(pascalsTriangle(2));
console.log(pascalsTriangle(5));
console.log(pascalsTriangle(10));
console.log(pascalsTriangle(25));
