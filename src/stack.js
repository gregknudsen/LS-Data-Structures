class Stack {
  constructor(size = 0) {
    this.store = [];
    this.size = size;
  }

  add(element) {
    console.log(this.size);
    this.size += 1;
    return this.store.push(element);
  }

  remove() {
    if (this.size > 0) {
      this.size -= 1;
    } else this.size = 0;
    return this.store.pop();
  }
}

module.exports = Stack;
