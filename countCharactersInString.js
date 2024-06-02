function countCharacters(str) {
  let newObj = {};

  for (let i of str) {
    newObj[i] = (newObj[i] || 0) + 1;
  }
  console.log(newObj);
}

countCharacters("sampadavyas");
