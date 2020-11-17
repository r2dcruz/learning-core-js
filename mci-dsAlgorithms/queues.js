// first in, first out

// lookup o(n) - searching through the stack specifically
// enqueue o(1) - add to the front
// dequeue o(1) - remove the first item of the stack
// peek o(1) - show the first item of the stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return this;
    }
}

let qu = new Queue();
qu.enqueue("google");
qu.enqueue("twitter");
qu.enqueue("amazon");
qu.enqueue("apple");
qu.dequeue();
qu.dequeue();
qu.dequeue();
qu.dequeue();
qu.dequeue();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    return this.first;
  }
}
// cleaning out got this structure mixed up with stacks

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
}

let qu = new Queue();
qu.enqueue("google");
qu.enqueue("twitter")
qu.enqueue("amazon")

//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
}

let qu = new Queue();
qu.enqueue("google");
qu.enqueue("twitter")
qu.enqueue("amazon")