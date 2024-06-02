const array = [1, 2, 3, [9, 10, 12, 13, [6, 7, 8]]];

function flattenArray(array) {
  return array.reduce((acc, curr) => {
    console.log(acc);
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
}
console.log(flattenArray(array));
