//singley linkedList

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    //add to the end
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    //add to the front
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    //specific add
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index -1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        //next to check params
        if (index >= this.length) {
          return "Check your index";
        }

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        //need to check params
        if (index >= this.length) {
          return "Check your index";
        }
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value) ;
            currentNode = currentNode.next;
        }
        return array;
    }
    search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "Doesn't exist";
  }
    //reverse linkedList
    reverse() {
        if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this.printList();
    }
}

// main parts of linkedList

let myLinkedList = new LinkedList(10);
myLinkedList.append("initiating");
myLinkedList.append("addBack");
myLinkedList.append("addFront");
myLinkedList.append("index");
myLinkedList.append("traverseFunc");
myLinkedList.append("remove");
myLinkedList.printList();

//linkedList confidence = 95

// 3/29/2020 insert() * print() * remove()

//cleaning up this practice

//keep practicing
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    addBack(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    addFront(value) {
        const newNode = new Node(value);
        const holdingPointer = this.head;
        this.head = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currrentNode = this.head;
        while (counter !== index) {
            currrentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    addBack(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    addFront(value) {
        const newNode = new Node(value);
        const holdingPointer = this.head;
        this.head = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currrentNode = this.head;
        while (counter !== index) {
            currrentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}
//can't stop

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1; 
  }
  addBack(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  addFront(value) {
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  print() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let ll = new LinkedList(55);
ll.addBack(56);
ll.addBack(57);
ll.addFront(54);
ll.insert(1,64);
ll.print();

// you really do forget it if you don't practice everyday

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1; 
    }
    addBack(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    addFront(value) {
      const newNode = new Node(value);
      const holdingPointer = this.head;
      this.head = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
    }
    insert(index, value) {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
    }
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    print() {
      let array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  }
  
  let ll = new LinkedList(55);
  ll.addBack(56);
  ll.addBack(57);
  ll.addFront(54);
  ll.insert(1,64);
  ll.print();
  
  // practice, save, add, commit, push, [repeat]

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    print() {
      let array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
    addBack(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  
  let ll = new LinkedList(50);
  ll.addBack(60);
  //ll.print();
  