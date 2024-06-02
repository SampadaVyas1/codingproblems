arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

let index = arr.indexOf(0);
for (let i = index + 1; i < arr.length; i++) {
  if (arr[i] !== 0 && arr[index] === 0) {
    arr[index] = arr[i];
    index++;
  }
}

console.log(arr);
