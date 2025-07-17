function postfixEvaluator(string) {
  // write your magic code here
  let newArr = string.split(" ");
  let numberArr = string
    .split(" ")
    .filter((element) => +element)
    .map((element) => +element);
  let operandArr = newArr.filter((element) => /\W/g.test(element));
  let results = [];
  let mid = Math.floor(numberArr.length / 2);
  const leftSide = numberArr.slice(0, mid);
  const rightSide = numberArr.slice(mid);
  results.push(leftSide, rightSide);
  let counter = "";
  for (let arr = 0; arr < numberArr.length; arr++) {
    // equation(
    //   numberArr[arr],
    //   numberArr[arr - 1],
    //   operandArr[numberArr.length - arr]
    // );
    //console.log(twos);
    const twos = numberArr.splice(-2, 2);
    counter += equation(twos[0], twos[1], operandArr[arr]);
  }
  const spaceIndex = counter.trim().indexOf(" ");
  return counter.replace(counter[spaceIndex], operandArr[spaceIndex - 1]);
}
console.log(postfixEvaluator("2 3 9 4 / + *"));
function equation(numArr, num, operandArr) {
  let i = 0;
  let j = 0;
  let holder = "";
  holder += `${numArr}${operandArr}${num} `;
  return holder;
}
