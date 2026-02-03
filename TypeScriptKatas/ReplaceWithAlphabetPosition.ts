function alphabetPosition(text: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  //filtering out any unstring element

  const arr = text
    .toLowerCase()
    .split("")
    .filter((letter) => /[a-z]/i.test(letter));

  let results: number[] = [];

  for (let char of arr) {
    results.push(alphabet.indexOf(char) + 1);
  }
  return results.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
