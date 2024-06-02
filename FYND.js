async function asyncFunc() {
  console.log("A");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("B");
}
console.log("C");
asyncFunc();
console.log("D");

// function memoize() {
//   let array = [2, 3, 4, 5,7];
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     let val = array[i];
//     let fac = 1;
//     while (val > 0) {
//       if (i == 0) {
//         obj[array[i]] = array[0];
//         val--;
//         break;
//       } else if (val === obj[val]) {
//         fac = fac * obj[val];
//         val--;
//         break;
//       }
//       else {
//         fac = fac * val;
//         val--;
//       }
//     }
//     if (i == 0) {
//       obj[array[i]] = array[0];
//     } else {
//       obj[array[i]] = fac;
//     }
//     console.log(fac);
//     console.log(obj);
//   }
// }
// memoize();

let j = 0;
// for (j = 0; j < 5; j++) {
//   setTimeout(() => console.log(j), 0);

// }

for (j = 0; j < 5; j++) {
  setTimeout((k) => console.log(k), 0, j);
}

// for (var k = 0; k < 5; k++) {
//   setTimeout(() => console.log(k), 0);
// }

// async function asyncFunc() {
//   console.log("A");
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("B");
// }
// console.log("C");
// asyncFunc();
// console.log("D");

// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();
