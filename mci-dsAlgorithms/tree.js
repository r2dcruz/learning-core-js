//first cracked at trees
//with the help of @beiatrix
//https://youtu.be/6JeuJRqKJrl

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor(value) {
      this.root = new Node(value);
      this.count = 0;
    }
    size() {
      return this.count;
    }
    insert(value) {
      this.count++;
      let newNode = new Node(value);
      const searchTree = node => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        }
        else if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      }
      searchTree(this.root);
    }
    min() {
      let currentNode = this.root;
      while(currentNode.left) {
        currentNode = currentNode.left;
      }
      return currentNode.value;
    }
    max() {
      let currentNode = this.root;
      while(currentNode.right) {
        currentNode = currentNode.right;
      }
      return currentNode.value;
    }
    contains(value) {
      let currentNode = this.root;
      while (currentNode) {
        if (value === currentNode.value) {
          return true;
        }
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      return false;
    }
    dfsInOrder() {
      let result = [];
      const traverse  = node => {
        if (node.left) traverse(node.left);
        result.push(node.value)
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return result;
    }
    dfsPreOrder() {
      let result = [];
      const traverse = node => {
        if (node.right) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
      }
      traverse(this.root);
      return result;
    }
    dfsPostOrder() {
      let result = [];
      const traverse = node => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
      }
      traverse(this.root)
      return result;
    }
    bfs() {
      let result = [];
      let queue = [];
      queue.push(this.root);
      while(queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
      return result;
    }
   }
  
  const bst = new BST(15);
  bst.insert(3);
  bst.insert(36);
  bst.insert(2);
  bst.insert(12);
  bst.insert(28);
  bst.insert(39);
  bst.size();
  bst.min();
  bst.max();
  bst.contains(2);
  bst.contains(9);
  
  bst.dfsInOrder();
  bst.dfsPreOrder();
  bst.dfsPostOrder();
  bst.bfs();
  
// still need to disect this.
// been doing this tree all wrong. need to redo it

//pulled from MCI: DS + A course.

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    //Code here
  }
}

