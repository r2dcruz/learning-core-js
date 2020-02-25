// Last in, first out

// lookup o(n) - searching through the stack specifically
// pop o(1) - remove the last item
// push o(1) - add an item
// peek o(1) - view the top plate

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        let newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        let leader = null;
        let holdingPointer = null; 
    }
    traverseToIndex
}