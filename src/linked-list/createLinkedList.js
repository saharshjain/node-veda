//create a linked list in js with basic features of adding removing and traversing the list

class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkedList {
  contructor() {
    this.head = null;
    this.size = 0;
  }
  //CRUD
  insertElement(element) {
    let node = new Node(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let currentElement = this.head;
      while (currentElement.next != null) {
        currentElement = currentElement.next;
      }
      currentElement.next = node;
      console.log("Inserted ", node.data);
    }
    this.size++;

  }
  updateElement(element, position) {
    if (position > this.size && this.size != 0) {
      console.log("Position does not exists, inserting at end.");
      this.insertElement(element);
      return;
    }
    if (this.isEmpty()) {
      console.log("Position does not exists, inserting at beginning.");
      this.insertElement(element);
      return;
    }

    let currentElement = this.head;
    let counter = 1;
    while (currentElement.next != null && counter != position) {
      currentElement = currentElement.next;
      counter++;
    }
    currentElement.data = element;
    console.log("Updated element to ", element);
  }
  deleteElement(element, position) {
    if (this.isEmpty() || (position > this.size && this.size != 0)) {
      console.log("Position does not exists.");
      return;
    }

    let currentElement = this.head;
    let counter = 1;
    while (currentElement.next != null && counter < position - 1) {
      console.log("her");
      currentElement = currentElement.next;
      counter++;
    }
    currentElement = currentElement.next;
    console.log("Deleted element.");
  }

  //utility functions
  traverse() {
    if (!this.isEmpty()) {
      let currentElement = this.head;
      let str = "";
      while (currentElement != null) {
        str += currentElement.data + " -> ";
        currentElement = currentElement.next;
      }
      str += "end";
      console.log(str);
    }
  }
  isEmpty() {
    if (this.head == null) {
      console.log("Queue is empty!");
      return true;
    }
    return false;
  }
}

function runProgram() {
  var ll = new LinkedList();

  ll.traverse();
  ll.insertElement(1);
  ll.traverse();
  ll.insertElement(2);
  ll.insertElement(3);
  ll.traverse();
  ll.updateElement(4, 2);
  ll.traverse();
  ll.deleteElement(1);
  ll.traverse();
  ll.insertElement(5);
  ll.insertElement(6);
  ll.insertElement(7);
  ll.insertElement(8);
  ll.traverse();
  ll.updateElement(111, 4);
  ll.traverse();

}
runProgram();