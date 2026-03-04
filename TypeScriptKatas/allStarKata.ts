function strCount(str: string, letter: string): number {
  const stringArr = str.split("");

  const obj = stringArr.reduce((acc: Record<string, number>, element) => {
    acc[element] = (acc[element] as number | 0) + 1;
    return acc;
  }, {});

  return obj[letter] || 0;
}
console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
