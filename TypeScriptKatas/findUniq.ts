function findUniq(arr: string[]): void {
  // Do the magic
  const newArr = arr.join("").split("");
  const obj = newArr.reduce<Record<string, number>>(
    (acc: Record<string, number>, str: string) => {
      acc[str] = (acc[str.toLowerCase()] || 0) + 1;
      return acc;
    },
    {},
  );

  let thatOne = Object.values(obj);
  const entries = Object.entries(obj);
  const smallestONe = Math.max(...thatOne);
  const unique = entries.find((arr) => arr[1] === smallestONe)!;
  console.log(unique);
  // return arr.find((element) =>
  //   element.toLowerCase().includes(unique[0].toLowerCase()),
  // ) as string;
}

// console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
// console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
// console.log(findUniq(["silvia", "vasili", "victor"]));
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]),
);

console.log(findUniq(["Gollum", "Log"]));
// console.log(findUniq(["    ", "a", " "]));
