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
