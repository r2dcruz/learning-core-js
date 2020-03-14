//testing node.js

function Node(value) {
    this.value = value;
    this.next = null;
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
}

(function test(){
    console.log("test function")
    let ll = new LinkedList(77);
    console.log(ll);
})