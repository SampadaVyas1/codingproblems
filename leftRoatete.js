let arr = [1, 2, 3, 4, 5];
let d = 3;
const arr1 = arr.slice(0, d).reverse();
const arr2 = arr.slice(d, arr.length).reverse();

console.log([...arr1, ...arr2].reverse());
