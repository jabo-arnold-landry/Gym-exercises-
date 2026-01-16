function toWeirdCase(string) {
  //TODO
  const arrStr = string.split(" ");
  console.log(arrStr);
  let results = "";
  for (let key in string) {
    results +=
      key % 2 === 0 ? string[key].toUpperCase() : string[key].toLowerCase();
    console.log(results);
  }

  return results;
}

console.log(toWeirdCase("Weird string case"));
