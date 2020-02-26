// Last in, first out

// lookup o(n) - searching through the stack specifically
// pop o(1) - remove the last item
// push o(1) - add an item
// peek o(1) - view the top plate


// using LinkedList
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
      return this;
    }
}

const stack = new Stack();
stack.peek();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.peek();
stack.pop();
stack.pop();
stack.pop();
