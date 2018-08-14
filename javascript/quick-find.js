// Given two integers, the Quick Find Algorithm determines if they're connected.

class QuickFind {
  
  constructor(n) {
    this.id = []
    for (let i = 0; i < n; i += 1) {
      this.id[i] = i
    }
  }

  connected(a, b) {
    return this.id[a] === this.id[b]
  }

  union(a, b) {
    const aid = this.id[a]
    const bid = this.id[b]
    for (let i = 0; i < this.id.length; i += 1) {
      if (this.id[i] === aid) { this.id[i] = bid }
    }
  }
}

const dataSet = new QuickFind(10)
dataSet.union(5, 2)
dataSet.union(0, 2)
dataSet.union(0, 8)
console.log(dataSet) // QuickFind { id: [ 8, 1, 8, 3, 4, 8, 6, 7, 8, 9 ] }
console.log(dataSet.connected(5, 8)) // true
console.log(dataSet.connected(5, 2)) // true
console.log(dataSet.connected(1, 2)) // false




