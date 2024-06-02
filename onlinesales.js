// const data = "a12v3";

// const array = data.match(/\d+/g);
// console.log(array);

// const reduceResult = array.reduce((acc, curre) => Number(curre) + acc, 0);
// console.log(reduceResult);

class List {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
  }
  appendNode(value) {
    let newObj = {
      value: value,
      next: null,
    };
    this.tail.next = newObj;
    this.tail = newObj;
  }
  createCircularLinkList() {
    let lastNode = this.head;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    lastNode.next = this.head;
  }
  checkIfCircularLinkList() {
    let lastNode = this.head;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
      if (lastNode === this.head) {
        console.log("is A circular linked lIsr");
        break;
      }
    }
    if (lastNode.next === null) {
      console.log("not a circular linked list");
    }
  }
}
const list = new List(20);
list.appendNode(22);
list.appendNode(3422);
list.createCircularLinkList();
list.checkIfCircularLinkList();
console.log(list);

