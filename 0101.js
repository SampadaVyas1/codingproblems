let array = [1, 0, 1, 1, 2, 0, 0];

// let i = 0;
// let j = array.length - 1;

// while (i < j) {
//   if (array[i] < array[j]) {

//   }
// }

console.log(
  array.filter((ele, index) => {
    return array.indexOf(ele) === index;
  })
);
