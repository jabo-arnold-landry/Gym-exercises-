function isPrime(number) {
  // ...
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getPrimes(start, finish) {
  // ...
  // if (start < 2 && finish < 2) return [start];
  const allPrimes = [];
  if (start > finish) {
    let temp = start;
    start = finish;
    finish = temp;
  }
  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      allPrimes.push(i);
    }
  }
  return allPrimes;
}
console.log(getPrimes(0, 30));

// assertEquals(isPrime(0), false);
// Test.assertEquals(isPrime(1), false);
// Test.assertEquals(isPrime(2), true);
// Test.assertEquals(isPrime(3), true);
// Test.assertEquals(isPrime(4), false);
// Test.assertEquals(isPrime(5), true);
//'2,3,5,7,11,13,17,19,23,29'
