function outer() {
  let value = 13;
  return function inner() {
    console.log("value:", value);
  };
}

const outerFun = outer();
outerFun();

let array = [1, 3, 4, 5, 6, 7];

const val = array.reduce((acc, curr) => acc + curr, 0);

console.log(val);
