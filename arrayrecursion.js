const array = [1, 2, 3, [9, 10, 12, 13, [6, 7, 8]]];

let allElement = [];
function recursion(array) {
  const newArr = array.flat();
  let element;
  for (let i = 0; i < newArr.length; i++) {
    if (Array.isArray(newArr[i])) {
      element = recursion(newArr[i]);
    } else {
      allElement = [...allElement, newArr[i]];
    }
  }
}

recursion(array);
console.log(allElement);

//Remove duplicates from an array

const array1 = [1, 2, 3, 4, 2, 5, 1];

let obj = {};
let newArr = [];

for (let i = 0; i < array1.length; i++) {
  if (!obj.hasOwnProperty(array1[i])) {
    obj[array1[i]] = true;
    newArr.push(array1[i]);
  }
}
console.log(newArr);

//linkList

class List {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.lastNode = this.head;
  }
  appendNode(val) {
    let newObj = {
      val: val,
      next: null,
    };
    this.lastNode.next = newObj;
    this.lastNode = newObj;
  }
  createCircularLinkList() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = this.head;
  }
  checkIfLinkListIsCircularOrNot() {
    let currentNode = this.head;
    while (currentNode.next !== this.head) {
      if (currentNode.next === null) {
        
      }
      currentNode = currentNode.next;
    }
  }
}

const list = new List(13);
console.log(list.appendNode(2));
console.log(list.createCircularLinkList());
console.log(list.checkIfLinkListIsCircularOrNot());
console.log(list);
