// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseSentence(sentence) {
  const newArray = sentence.split(" ");
  let newStr = "";
  for (let i = newArray.length - 1; i >= 0; i--) {
    newStr = newStr + " " + newArray[i];
  }
  console.log(newStr);
}

reverseSentence("The quick brown fox");
