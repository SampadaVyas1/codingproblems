class List {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
  }
  appendNote(data) {
    const newObj = {
      value: data,
      next: null,
    };
    this.tail.next = newObj;
    this.tail = newObj;
  }
  traverse() {
    let pointerNode = this.head;
    while (pointerNode != null) {
      console.log(pointerNode.value);
      pointerNode = pointerNode.next;
    }
  }
  createCircularLinkList() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = this.head;
  }

  circularLinkList() {
    let currentNode = this.head;
    let headNode = this.head;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
      if (currentNode.next === headNode) {
        console.log("a circular linked list");
        break;
      }
    }
    if (currentNode.next === null) {
      console.log("not a circular linked list");
    }
  }
}
const list = new List(29);
list.appendNote(20);
list.appendNote(45);
list.appendNote(145);
list.createCircularLinkList();
list.circularLinkList();

console.log(list);
