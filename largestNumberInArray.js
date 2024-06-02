const arr = [20, 10, 20, 4, 100];

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
