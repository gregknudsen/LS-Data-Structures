class Stack {
  constructor(size = 0) {
    this.store = [];
    this.size = size;
  }

  add(element) {
    return this.store.push(element);
    // return this.store.size += 1;
  }

  remove() {
    return this.store.pop();
    // return this.store.size -= 1;
  }

  size(store) {
    return this.store.length;
  }
}

module.exports = Stack;
