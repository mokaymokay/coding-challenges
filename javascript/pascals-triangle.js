// This algorithm outputs an array of arrays that make up the Pascal's Triangle of n layer(s).

// Time complexity: O(n^2)
// Space complexity: O(n)

const pascalsTriangle = (n) => {
  // initiate triangle with anamolies
  let pascalHash = new Map()
  pascalHash.set(0, [])
  pascalHash.set(1, [1])
  pascalHash.set(2, [1,1])

  // create layer array using previous layer array in hash
  const createLayer = (l) => {
    let layer = [1]
    let prev = pascalHash.get(l - 1)
    for (let i = 0; i < prev.length - 1; i++) {
      layer.push(prev[i] + prev[i + 1])
    }
    layer.push(1)
    return layer
  }

  // create as many layers as needed depending on n
  let current = pascalHash.size
  while (n >= current) {
    if (!pascalHash.has(n)) {
      pascalHash.set(current, createLayer(current))
      current++
    }
  }

  // create output using hash
  let output = []
  for (let i = 1; i <= n; i++) {
    output.push(pascalHash.get(i))
  }

  return output
}

console.log(pascalsTriangle(0));
console.log(pascalsTriangle(1));
console.log(pascalsTriangle(2));
console.log(pascalsTriangle(5));
console.log(pascalsTriangle(10));
console.log(pascalsTriangle(25));
console.log(pascalsTriangle(100));
