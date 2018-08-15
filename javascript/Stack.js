class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(...items) {
    for (let item of items) {
      this.items[this.count] = item
      this.count += 1
    }
  }

  pop() {
    if (this.count === 0) return undefined
    this.count -= 1
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
  }

  peek() {
    if (this.count === 0) return undefined
    return this.items[this.count - 1]
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    while (this.count !== 0) {
      this.count -= 1
      delete this.items[this.count]
    }
  }
}

module.exports = Stack;