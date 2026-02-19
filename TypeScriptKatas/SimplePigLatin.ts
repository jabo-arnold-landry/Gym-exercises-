const pigIt = (a: string): string => {
  // code away
  const arr: any = a.split(" ");
  for (let word in arr) {
    const regex = /[a-zA-Z]/gm;
    if (regex.test(arr[word])) {
      let firstLetter = arr[word][0];
      let newString = `${arr[word].substring(1)}${firstLetter}ay`;
      arr.splice(+word, 1, newString);
    }
  }
  return arr.join(" ");
};

console.log(pigIt("Hello world !"));
