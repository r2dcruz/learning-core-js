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
      const holdingPointer = this.top //temp hold if we still want this value
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

// using arrays

class Stack{
    constructor() {
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value) {
      this.array.push(value);
      return this;
    }
    pop() {
      this.array.pop();
      return this;
    }
  }
  
  let st = new Stack();
  st.push("google");
  st.push("twitter");
  st.push("amazon");
  st.pop();
  st.pop();
  st.pop();


// another practice for stacks! need to know this in my sleep;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
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
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let st = new Stack();
st.push("google");
st.push("twitter");
st.pop();

//day 2 of practice algorithms 

class Node {
  constructor(value) {
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
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0){
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
    const holdingPointer = this.top
    this.top = this.top.next
    this.length--;
    return this;
  }
}

let st = new Stack();
st.push("google");
st.push("twitter");
st.pop();
st.pop();