let a = "a12b43";
let b = a.split("");
console.log(b);
let total = 0;
let number = "";
let aplhaets = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < b.length; i++) {
  if (aplhaets.includes(b[i])) {
    console.log(number);
    number && (total = total + Number(number));
    number = "";
  } else {
    number = number + b[i];
    console.log(number);
  }
}
if (number !== "") {
  total = total + Number(number);
}

console.log(total);
