function order(words: string): string {
  let arr = [];
  let newText = words.split(" ");
  for (let word of newText) {
    let num = Number(
      word
        .split("")
        .filter((char) => Number(char))
        .join(""),
    );

    arr.push({ count: num, str: word });
  }
  arr.sort((a, b) => a.count - b.count);
  const results = arr.map((obj) => obj.str);
  return results.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
