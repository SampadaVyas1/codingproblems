const array = [1, 3, 5, 6];

//Map
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};
let res = array.myMap((element) => element > 3);

//Filter

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i in this) {
    if (cb(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
res = array.myFilter((element) => element > 3);

//reduce

Array.prototype.myReduce = function (cb, initalVal) {
  let acc = initalVal;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

array.myReduce((acc, curr) => acc + curr);

// memoize the val

let newobj = {};
function factorial(val) {
  if (!newobj.hasOwnProperty(val)) {
    let fact = 1;
    for (let i = val; i > 0; i--) {
      if (newobj.hasOwnProperty(i)) {
        fact = fact * newobj[i];
        break;
      } else {
        fact = fact * i;
      }
    }
    newobj[val] = fact;
  } else {
    return newobj[val];
  }
}
factorial(4);
factorial(5);
factorial(6);
factorial(4);

//roate an array by k=3
// const element=[1,2,3,4,5,6]
// o/p:[4,5,6,1,2,3]

function roatete(array, k) {
  // for (let i = 0; i < k; i++) {
  let last = array[array.length - 1];
  array[1] = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    let seconelem = array[i + 1];
    array[i + 1] = seconelem;
  }

  array[0] = last;
  // }
  return array;
}

console.log(roatete([1, 2, 3, 4, 5, 6], 3));
