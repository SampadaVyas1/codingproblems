let array = ["Hello World", "sam", "jam"];
let newArray = [];
const reverseString = (str) => {
  let val = "";
  for (let i = str.length - 1; i >= 0; i--) {
    val = val + str[i];
  }
  return val;
};
for (let i = 0; i < array.length; i++) {
  let split = array[i].split(" ");
  if (split.length > 1) {
    let newstr = "";
    for (let j = 0; j < split.length; j++) {
      newstr = newstr + " " + reverseString(split[j]);
    }
    newArray.push(newstr);
  } else {
    newArray.push(reverseString(array[i]));
  }
}

console.log(newArray);
//[ ' olleH dlroW', 'mas', 'maj' ]
