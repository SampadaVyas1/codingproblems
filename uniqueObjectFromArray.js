// Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

function uniqueObject(array) {
  let newArray = [];
  array.map((element) => {
    if (!newArray.some((obj) => obj.name === element.name)) {
      newArray.push(element);
    }
  });
  console.log(newArray);
}
uniqueObject([
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
]);
