//solution

function arrayToObject(strings) {
  const object = {};
  for (let i = 0; i < strings.length; i++) {
    debugger;
    if (object[strings[i]] == null) object[strings[i]] = i;
  }
  return object;
}

console.log(arrayToObject(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]));
