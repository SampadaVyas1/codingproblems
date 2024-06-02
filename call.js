// function fun(a, b) {
//   console.log(this, this.x, this.y, a);
// }

// const obj1 = {
//   x: 1,
//   y: 2,
// };

// fun.apply(obj1, [1, 2]);

// const arr = [1, 2, 3, 4, 5];
// let obj = { ...arr };

// console.log(obj);

// const original_array = [7, 8, 9, 2, 5, 10, 1];
// console.log(original_array.sort((a, b) => a - b));

// for (let i = 0; i < original_array.length; i++) {
//   for (let j = i + 1; j < original_array.length; j++) {
//     if (original_array[i] > original_array[j]) {
//       let temp = original_array[i];
//       original_array[i] = original_array[j];
//       original_array[j] = temp;
//     }
//   }
// }
// console.log(original_array);

// const array = [0, 1, 0, 3, 0, 12, 0];

// const newArray = [];
// count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] !== 0) {
//     newArray.push(array[i]);
//   } else {
//     count++;
//   }
// }

// for (let i = 0; i < count; i++) {
//   newArray.push(0);
// }

// console.log(newArray);

// const array = [3, 2, 1, 56, 10000, 10670, 0];
// let max = 0;
// let min = array[0];

// for (let i = 0; i < array.length; i++) {
//   max = Math.max(max, array[i]);
//   min = Math.min(min, array[i]);
// }
// console.log(max, min);

const array = [7, 10, 4, 20, 15];
k = 4;
array.sort((a, b) => a - b);
console.log(array[k - 1]);

// const arr = [1, -1, 3, 2, -7, -5, 11, 6];
// const arr = [-5, 7, -3, -4, 9, 10, -1, 11];
// let negativeIndex = arr.length - 1;

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log([arr[negativeIndex], arr[i]]);
//   if (arr[i] < 0) {
//     [arr[negativeIndex], arr[i]] = [arr[i], arr[negativeIndex]];
//     negativeIndex--;
//   }
// }
// console.log(arr);

// const a = [85, 25, 1, 32, 54, 6];
// const b = [85, 2];

// let combinedArray = a.concat(b);
// let uniqueElemnts=new Set(combinedArray);
// const newArray=Array.from(uniqueElemnts)
// console.log(newArray)