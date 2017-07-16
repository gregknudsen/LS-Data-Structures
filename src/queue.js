class Queue {
  constructor(size = 0) {
    this.store = [];
    this.size = size;
  }

  enqueue(element) {
    this.size += 1;
    return this.store.unshift(element);
  }

  dequeue() {
    if (this.size > 0) {
      this.size -= 1;
    } else this.size = 0;
    return this.store.pop();
  }
}

module.exports = Queue;
