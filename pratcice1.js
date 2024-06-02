const array = [1, 2, 3, [9, 10, 12, 13, [6, 7, 8]]];
let newArray = [];
array.reduce((acc, curr, index) => {
  if (Array.isArray(curr)) {
    
  } else {
    return acc.concat(curr);
  }
});
