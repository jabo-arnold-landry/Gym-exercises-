function createCounter(initialValue) {
  let number = initialValue;
  return {
    getValue() {
      return number;
    },
    increment() {
      return number++;
    },
    decrement() {
      return number--;
    },
  };
}
const counter = createCounter(11);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getValue()); // should print 14

counter.decrement();

console.log(counter.getValue()); // should print 13

export { createCounter };
