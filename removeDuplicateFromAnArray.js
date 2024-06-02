const arr = [1, 1, 2, 2, 2, 3, 3, 44, 4, 5, 6];

let index = 0;
arr.sort((a, b) => a - b);

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[index]) {
  } else {
    index++;
    arr[index] = arr[i];
  }
}

console.log(arr.slice(0, index + 1));
