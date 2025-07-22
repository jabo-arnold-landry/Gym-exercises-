function genfib() {
  let n = 0;
  let results = [0, 1];
  return function fib() {
    if (n >= results.length) {
      results.push(results[n - 1] + results[n - 2]);
    }
    return results[n++];
  };
}
const fib = genfib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
