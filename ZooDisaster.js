class ZooDisaster {
  constructor(arr) {
    this.eats = arr;
  }
}

const antelope = new ZooDisaster(["grass"]);
const bigFish = new ZooDisaster(["little-fish"]);
const bug = new ZooDisaster(["leaves"]);
const bear = new ZooDisaster([
  "big-fish",
  "bug",
  "chiken",
  "cow",
  "leaves",
  "sheep",
]);
const chicken = new ZooDisaster(["bug"]);
const cow = new ZooDisaster(["grass"]);
const fox = new ZooDisaster(["chicken", "sheep"]);
const giraffe = new ZooDisaster(["leaves"]);
const lion = new ZooDisaster(["antelope", "cow"]);
const panda = new ZooDisaster(["leaves"]);
const sheep = new ZooDisaster("grass");

const what = {
  antelope,
  bigFish,
  bug,
  bear,
  chicken,
  cow,
  fox,
  giraffe,
  lion,
  panda,
  sheep,
};

// var whoEatsWho = function (zoo) {
//   // Your code here
//   const arr = zoo.split(",");
//   for (let i = 0; i <= arr.length; i++) {
//     const slcing = arr.slice(i, i + 3);
//     console.log(slcing);
//     const firstElement = slcing[0];
//     const lastElement = slcing[slcing.length - 1];
//     const eatsOne = what[firstElement];
//     const eatsTwo = what[lastElement];
//     const index = arr.findIndex((animal) => animal === slcing[1]);
//     arr.splice(index, 1);
//     console.log({ firstElement: eatsOne, lastElement: eatsTwo });
//   }
//   // console.log(arr);
// };

var input = "fox,bug,chicken,grass,sheep";
// console.log(whoEatsWho(input));

//second way
// function zooDisaster(zoo, counter = 0) {
//   const resulsts = [];
//   const arr = zoo.split(",");
//   if (arr.length > counter) {
//     const newMe = arr.slice(0, 3);
//     zooDisaster(newMe.join(","), (counter += 1));
//     return fn2(newMe);
//   }
// }

function fn2(arr) {
  let str = [];
  const mid = Math.floor(arr.length / 2);
  for (let i = mid; i < arr.length; i += arr.length) {
    const frontPage = arr[i - 1];
    const backPage = arr[i + 1];
    if (what[frontPage].eats.includes(arr[mid])) {
      str.push(`${frontPage} eats ${arr[mid]}`);
      const midIndex = arr.indexOf(arr[mid]);
      arr.splice(midIndex, 1);
    }

    if (what[backPage].eats.includes(arr[mid])) {
      str.push(`${backPage} eats ${arr[mid]}`);
      const midIndex = arr.indexOf(arr[mid]);
      arr.splice(midIndex, 1);
    }
  }
  return { str, arr };
}
// console.log(zooDisaster(input));
console.log(fn2(["fox", "bug", "chicken"]));
