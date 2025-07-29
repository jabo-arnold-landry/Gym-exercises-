function spinningRings(innerMax, outerMax) {
  let count = 0;
  while (innerMax != outerMax) {
    innerMax = innerMax === 0 ? innerMax : innerMax - 1;
    outerMax = outerMax === outerMax ? 0 : outerMax + 1;
    count++;
  }
  return count;
}
console.log(spinningRings(3, 2));
