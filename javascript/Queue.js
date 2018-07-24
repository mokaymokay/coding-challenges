class Queue {
  constructor() {
    this.items = []
  }

  enqueue(...items) {
    // add items to end of queue
    this.items = [...this.items, ...items]
    return this.items
  }

  dequeue(count = 1) {
    // remove item from front of queue (at index 0)
    if (this.items.length == 0) return undefined
    return this.items.splice(0, count)[0]
  }

  peek() {
    return this.items.length !== 0 ? this.items[0] : undefined
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }
}

let myQueue = new Queue()
console.log(myQueue.enqueue(1,2,3));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
