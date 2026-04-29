function findUniq(arr: string[]): string {
  // Do the magic
  const newArr = arr.join("").split("");
  const obj = newArr.reduce<Record<string, number>>(
    (acc: Record<string, number>, str: string) => {
      acc[str.toLowerCase()] = (acc[str.toLowerCase()] || 0) + 1;
      return acc;
    },
    {},
  );

  let thatOne = Object.values(obj);
  const entries = Object.entries(obj);
  const smallestONe = Math.min(...thatOne);
  const unique = entries.find((arr) => arr[1] === smallestONe)!;
  return arr.find((element) =>
    element.toLocaleLowerCase().includes(unique[0]),
  ) as string;
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
console.log(findUniq(["silvia", "vasili", "victor"]));
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]),
);
console.log(findUniq(["    ", "a", " "]));
