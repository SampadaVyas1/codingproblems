let a = "abc";
let b = "sampadavyasabc";

function checkSubString() {
  for (let i = 0; i <= b.length - a.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i + j]) {
        count++;
      } else {
        break;
      }
    }
    if (count === a.length) {
      return true;
    }
  }
  return false;
}

console.log(checkSubString()); // Output: true or false
