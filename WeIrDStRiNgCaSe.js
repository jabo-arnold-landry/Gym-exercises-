function toWeirdCase(string) {
  //TODO
  let weirdCapital = [];
  const arrStr = string.toLowerCase().split(" ");
  for (let word of arrStr) {
    weirdCapital.push(weirdPtize(word));
  }
  return weirdCapital.join(" ");
}
function weirdPtize(word) {
  const results = [];
  for (let i = 0; i < word.length; i++) {
    i % 2 !== 0 ? results.push(word[i]) : results.push(word[i].toUpperCase());
  }
  return results.join("");
}

console.log(toWeirdCase("UPPER CASE"));

/*
 # Kata Description:Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

## Test Cases:
 - "String" => "StRiNg"
 - "Weird string case" => "WeIrD StRiNg CaSe"

*/
