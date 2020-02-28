// implement Queue using Stacks

class StackQueue {
    construct() {
        this.first = [];
        this.last = [];
    }
    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }
    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }
    peek(){
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}

const stQueue = new StackQueue();
stQueue.enqueue("google");
stQueue.enqueue("apple");
stQueue.enqueue("facebook");

//leet code submission
//plan to revise and clean
var MyQueue = function() {
    this.array = []
    
};

MyQueue.prototype.push = function(value) {
    this.array.push(value)
};

MyQueue.prototype.pop = function() {
    let length = this.array.length;
    if(length > 0){
        return this.array.shift()
    }
    return false
};

MyQueue.prototype.peek = function() {
    let length = this.array.length;
    if(length > 0){
        return this.array[0]
    }
};

MyQueue.prototype.empty = function() {
    return this.array.length === 0
};
