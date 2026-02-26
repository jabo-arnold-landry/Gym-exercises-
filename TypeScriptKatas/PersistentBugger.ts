 function persistence(num: number): number {
  // your code here
  let arr = num.toString().split("");
  let count = arr.length;
  let counter = 0;

  while (count !== 1) {
    let answer = arr.reduce((acc, element) => (acc *= +element), 1);
    count = answer.toString().split("").length;
    arr = answer.toString().split("");
    counter += 1;
  }
  return counter;
}

console.log(persistence(999));
