// const calculatehighestAverageService = (dataArray) => {
//   const serviceDataObject = {};
//   for (const [service, amount] of dataArray) {
//     if (service in serviceDataObject) {
//       serviceDataObject[service].total =
//         serviceDataObject[service].total + amount;
//       serviceDataObject[service].count = serviceDataObject[service].count + 1;
//     } else {
//       serviceDataObject[service] = { total: amount, count: 1 };
//     }
//   }

//   let highestAverage = "";
//   let maxAverage = 0;

//   for (const service in serviceDataObject) {
//     const { total, count } = serviceDataObject[service];
//     const average = total / count;
//     if (maxAverage < average) {
//       maxAverage = average;
//       highestAverage = service;
//     }
//   }
//   return highestAverage;
// };
// const dataArray = [
//   ["Swiggy", 123],
//   ["Swiggy", 227],
//   ["Zomato", 103],
//   ["Zomato", 171],
//   ["Dunzo", 131],
//   ["Zomato", 122],
//   ["Swiggy", 181],
// ];
// const result = calculatehighestAverageService(dataArray);
// console.log(result);

let array = [1, 2, 1, 2, 1];
const obj = { 1: 1 };
// console.log([...new Set(array)]);
// console.log(Array.from(new Set(array)));
// console.log([...array]);

// for (let i = 0; i < array.length; i++) {
//   let val = array[i];
//   for (let j = i + 1; j < array.length; j++) {

//   }
// }

for (let i = 0; i < array.length; i++) {
  let count = 0;
  let currentElement = array[i];
  for (let j = i + 1; j < array.length - 2; j++) {
    if (array[j] === currentElement) {
      array[j] = array[j + 1];
    }
  }
}
console.log(array);
