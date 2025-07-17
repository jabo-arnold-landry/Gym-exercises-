const date = new Date();
// console.log(date.toString());
// flattening arrays
// function flattenArray(arr) {
//   return arr.flat();
// }
// console.log(
//   flattenArray([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// )
// const object = {
//   name: undefined,
//   year: null,
// };
// function convertNullableValues(obj) {
//   for (key in obj) {
//     if (obj[key] === null) obj[key] = 0;
//     else if (obj[key] == undefined) obj[key] = "";
//   }
//   return obj;
// }

// console.log(convertNullableValues(object));

// const name = "jabo";

// quiz app
class Subject {
  constructor(questions, answers) {
    this.questions = questions;
    this.answers = answers;
  }
}
const mathematics = new Subject([1 + 1, 2 + 3], ["a", "b"]);
console.log(mathematics);
