const densityValue = {
  H: 1.36,
  W: 1.0,
  A: 0.87,
  O: 0.8,
};
function separateLiquids(glass) {
  const liquidLength = glass.length;
  const values = glass.flat(Infinity);
  const densityValues = values.map(
    (element) => (element = densityValue[element])
  );
  densityValues.sort((a, b) => a - b);
  return restoringOrder(densityValues, liquidLength);
}

function restoringOrder(arr, originalLength) {
  if (arr.length < 1) arr;
  let combination = [];
  const keys = Object.keys(densityValue);
  for (
    let x = 0;
    x < arr.length;
    x += Math.floor(arr.length / originalLength)
  ) {
    let arrays = arr.slice(x, x + 4);
    combination.push(
      arrays.map((num) => {
        return (num = keys.find((element) => densityValue[element] === num));
      })
    );
  }
  return combination;
}
console.log(
  separateLiquids([
    ["H", "H", "W", "O"],
    ["W", "W", "O", "W"],
    ["H", "H", "O", "O"],
  ])
);
