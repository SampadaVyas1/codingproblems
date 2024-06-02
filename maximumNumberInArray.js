// Write a JavaScript program to find the maximum number in an array.

function maximumNumber(array) {
  let hightest = array[0];
  array.map((ele) => {
    if (ele.name > hightest.name) {
      hightest = ele;
    }
  });
  console.log(hightest);
}
maximumNumber([
  { name: 23 },
  { name: 56 },
  { name: 76 },
  { name: 78 },
  { name: 111111 },
]);
