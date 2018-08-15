class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(...items) {
    // add items to end of queue
    for (let item of items) {
      this.items[this.count] = item
      this.count += 1
    }
    return Object.values(this.items)
  }

  dequeue(count = 1) {
    // remove item from front of queue
    if (this.count == 0) return undefined
    const item = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount += 1
    return item
  }

  peek() {
    return !this.isEmpty() ? this.items[this.lowestCount] : undefined
  }

  size() {
    return Object.keys(this.items).length
  }

  isEmpty() {
    return this.size() === 0
  }
}

module.exports = Queue;