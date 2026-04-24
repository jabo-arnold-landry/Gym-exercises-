function isPP(n) {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      let power = 1;
      let acc = i;
      while (acc <= n) {
        if (acc === n) return [i, power];
        power += 1;
        acc = i ** power;
      }
    }
  }
  return null; // fix me
}
