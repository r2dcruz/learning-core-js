//singley linkedList example

class LinkedList {
    constructor (value) {
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }
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
    //this prints the output to readable array
    printList() {
      const array = [];
      let currentNode = this.head;
      //loop to search through until null
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
    insert(index, value) {
      //determine size of list
      if (index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null
      };
  
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter != index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
    }
  }

  //calling out function class
  const myLinkedList = new LinkedList(10);
  //callling out methods
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  
  console.log(myLinkedList);