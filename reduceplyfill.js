// const array = [1, 3, 5, 6];

// // let res=array.reduce((acc, curr) => {
// //     return acc+curr
// // }, 0)
// // console.log(res)

Array.prototype.myreduce = function myreduce(cb, initialvalue) {
  let acc = initialvalue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

// let res = array.myreduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(res);

// function removeDuplicates(arr) {
//   let hashmap = {};
//   const uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (hashmap[arr[i]]) {
//       hashmap[arr[i]] = true;
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }

// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = removeDuplicates(array);

// console.log(uniqueArray);

var createCounter = function (init) {
  return {
    increment: () => init + 1,
    reset: () => init,
    decrement: () => init - 1,
  };
};

const counter = createCounter(5);
// console.log(counter);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
