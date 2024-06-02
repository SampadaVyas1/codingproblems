// let numbers =
//   "61 30 28 47 42 25 41 56 27 45 44 34 46 35 58 36 60 29 53 55 32 31 33 59 50 51 52 37 39 38 43 49 54 57 40 26 48";
// let arr = numbers.split(" ").map(Number);

const arr = [6, 2, 4, 7, 7, 5];

let largest = arr[0];
let secondLargest = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  }
  if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}
console.log(largest);
console.log(secondLargest);
