const array = [
  { age: 1, name: "sub" },
  { age: 2, name: "dsa" },
  { age: 1, name: "dsdsf" },
];

const res = array.map((element, index) => ({ [element.age]: element.name }));
console.log(res);

//reverese an array

const array1 = [1, 2, 3, 4, 5];
array1.reverse(); //O(1)

// O(n/2)
function reveresAnArray() {
  let start = 0;
  let end = array1.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

reveresAnArray(array1);

//O(n)

function reverse(array1) {
  let output = [];
  while (array1.length) {
    output.push(array1.pop());
  }
  return output;
}
console.log(reverse(array1));

console.log(array1);

//Find minimum and maximum element in an array

//O(n)
const a = [3, 2, 1, -1, 56, 10000, 167];

let max = a[0];
let min = a[0];

for (let i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[[i]];
  } else if (min > a[i]) {
    min = a[i];
  }
}

//O(1)

min = Math.min(...a);
max = Math.max(...a);
// console.log(min);
// console.log(max);

//nlogn
a.sort((a, b) => a - b);
console.log(a[0]);
console.log(a[a.length - 1]);

//Kth smallest element
//k=3

//n log n
const newArr = [7, 10, 4, 3, 20, 15];

function kthSmallest(arr, k) {
  const b = arr;
  b.sort((a, b) => a - b);
  console.log(b[k - 1]);
}
kthSmallest(newArr, 3);


