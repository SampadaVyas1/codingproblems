class List {
    constructor(data) {
      this.head = {
        value: data,
        next: null,
      };
      this.tail = this.head;
    }
    appendNode(nodeData) {
      const newNode = {
        value: nodeData,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  const list = new List(200);
  list.appendNode(300);
  list.appendNode(1300);
  list.appendNode(400);
  console.log(list);

// class List {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//   }
// }
// const list = new List(value);
// console.log(list);
