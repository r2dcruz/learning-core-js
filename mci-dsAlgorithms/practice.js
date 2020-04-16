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
}