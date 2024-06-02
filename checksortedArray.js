// Input : 20 21 45 89 89 90
// Output : Yes

// Input : 20 20 45 89 89 90
// Output : Yes

// Input : 20 20 78 98 99 97
// Output : No

input = "20 20 45 89 89 90";
const arr = input.split(" ").map(Number);
console.log(arr);

function checkArrayIsSorted() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(checkArrayIsSorted());
