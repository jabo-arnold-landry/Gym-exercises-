const result = (text, markers) => {
  // regular expression constructor
  const regex = new RegExp(`\\s*[${markers.join("")}].*$`, "gm");
  return text.replace(regex, " ");
};

console.log(result("apples, pears # and bananas", ["#"]));
// raindrops
function rainDrops(drop) {
  if (drop % 3 === 0) {
    return "Plig";
  } else if (drop % 5 === 0) {
    return "Plang";
  } else if (drop % 3 === 0 && drop % 5 === 0) {
    return "PlingPlong";
  } else if (drop % 7 === 0) {
    return "Plong";
  } else {
    return drop;
  }
}
console.log(rainDrops(15));

function transform(value) {
  const valueString = value.toString();
  const numDigits = valueString.length;
  let sum = 0;
  for (let i = 0; i <= numDigits; i++) {
    sum += Math.pow(parseInt(valueString[i]), numDigits);
  }
  return sum === value;
}
console.log(transform(7));
// sorting out letters

function longest(s1, s2) {
  // your code
  const combined = s1 + s2;
  const uniqueChars = new Set(combined);
  const arr = Array.from(uniqueChars);
  return arr.sort().join("");
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
