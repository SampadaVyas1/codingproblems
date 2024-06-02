const array = [
  { id: 1, team: "ddd" },
  { id: 2, team: "ww" },
  { id: 3, team: "ee" },
  { id: 1, team: "eee" },
];
console.log(new Map());
const mapContructor = new Map();

array.forEach((element) => {
  if (mapContructor.has(element.id)) {
    mapContructor.set(element.id, [element]);
  }
  mapContructor.get(element.id).push(element);
});
console.log(mapContructor);

