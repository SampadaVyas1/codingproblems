// xcv*** -> “”
// xass**dsd*ff -> xadsff
// asd**f*gh -> agh
// *****  -> “”
// aa**a**** -> “”

function convetStartToAppendElements(item) {
  const value = item.split("");
  let value1 = value;

  for (let i = 0; i < value.length + 1; i++) {
    if (value[i] === "*") {
      value.splice(i - 1, 2);
      i = i - 2;
    }
  }
  console.log(">>", value.join(""));
}

convetStartToAppendElements("aa**a****");
