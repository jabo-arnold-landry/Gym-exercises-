function ones(n) {
  if (n <= 1) return n;
  return 2 + Math.floor(n / 2);
}
console.log(ones(2));
