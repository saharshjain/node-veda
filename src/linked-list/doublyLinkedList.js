//create doubly linked list

class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  //utils
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    if (this.size == 0) {
      console.log("Queue is empty!");
      return true;
    }
    return false;
  }
  traverseHead() {
    if (!this.isEmpty()) {
      let currentElement = this.head;
      let str = "Head -> "
      while (currentElement != null) {
        str += currentElement.data + ' -> ';
        currentElement = currentElement.next;
      }
      str += " Tail";
      console.log(str);
    }
  }
  traverseTail() {
    if (!this.isEmpty()) {
      let currentElement = this.tail;
      let str = "Tail -> "
      while (currentElement != null) {
        str += currentElement.data + ' -> ';
        currentElement = currentElement.previous;
      }
      str += " Head";
      console.log(str);
    }
  }
  insertElement(element) {
    let node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }








}

function runProgram() {
  let ll = new LinkedList();
  ll.traverseHead();
  ll.traverseTail();
  ll.insertElement(1);
  ll.insertElement(2);
  ll.insertElement(3);
  ll.insertElement(4);
  ll.insertElement(5);
  ll.traverseHead();
  ll.traverseTail();

}
runProgram();
