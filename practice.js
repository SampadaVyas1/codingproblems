const arr = [1, 2, 4, 7, 7, 5];

let largest = arr[0];
let secondLargest = -1;

for (let i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest)
