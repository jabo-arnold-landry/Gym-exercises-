function countLonelyLetters(text) {
  const letterArr = text.split("");
  const obj = letterArr.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  const singleLetters = Object.entries(obj)
    .filter((arr) => arr[1] < 2)
    .map((arr) => arr[0]);

  const noNeighbors = [];
  for (let letter in singleLetters) {
    const letterIndex = letterArr.findIndex(
      (element) => singleLetters[letter] === element,
    );

    if (
      letterIndex === 0 &&
      text.charCodeAt(letterIndex + 1) - text.charCodeAt(letterIndex) !== 1
    ) {
      noNeighbors.push(singleLetters[letter]);
    } else if (
      letterIndex === text.length - 1 &&
      text.charCodeAt(letterIndex) - text.charCodeAt(letterIndex - 1) !== 1
    ) {
      noNeighbors.push(singleLetters[letter]);
    } else if (
      text.charCodeAt(letterIndex + 1) - text.charCodeAt(letterIndex - 1) !==
        2 &&
      letterIndex !== 0 &&
      letterIndex !== text.length - 1
    ) {
      noNeighbors.push(singleLetters[letter]);
    }
  }
  return noNeighbors.length;
}

console.log(countLonelyLetters("zz"));
