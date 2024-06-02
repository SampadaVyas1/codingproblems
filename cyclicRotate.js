// n = 3;
// a = [1, 2, 3, 4, 5];
// // a = [9, 8, 7, 6, 4, 2, 1, 3];

// for (let j = n - 1; j >= 0; j--) {
//   const value = a[a.length - 1];
//   for (let i = a.length - 1; i >= 0; i--) {
//     a[i] = a[i - 1];
//   }
//   a[0] = value;

// }
// console.log(a);

const n = 3;
const a = [9, 8, 7, 6, 4, 2, 1, 3];

for (let j = n - 1; j >= 0; j--) {
  const value = a[a.length - 1];
  for (let i = a.length - 1; i >= 0; i--) {
    a[i] = a[i - 1];
  }
  a[0] = value;
}

console.log(a);
