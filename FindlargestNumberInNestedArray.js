// Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

let newArray = [];
function largestElementInANestedArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      largestElementInANestedArray(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
}

largestElementInANestedArray([
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
]);

let hightest = newArray[0];
newArray.map((ele) => {
  if (ele > hightest) {
    hightest = ele;
  }
});

console.log(newArray, hightest);
