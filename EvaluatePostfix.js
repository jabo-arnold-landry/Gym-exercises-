function postfixEvaluator(string) {
  // write your magic code here
  let str = string.split(" ");
  let stack = [];
  for (let element of str) {
    if (!isNaN(element)) {
      stack.push(Number(element));
    } else {
      let rightNum = stack.pop();
      let leftNum = stack.pop();
      let results;
      switch (element) {
        case "+":
          results = leftNum + rightNum;
          break;
        case "*":
          results = leftNum * rightNum;
          break;
        case "/":
          results = leftNum / rightNum;
          break;
        case "-":
          results = leftNum - rightNum;
          break;
        default:
          return "unknown operand";
      }
      stack.push(results);
    }
  }
  return Math.floor(stack[0]);
}
console.log(postfixEvaluator("3 4 9 / *"));
