function rotateArray(items, n) {
  const nthToRemove = items.length - n;
  if (nthToRemove > items.length || nthToRemove < 0) return items.reverse();

  for (let i = 0; i < nthToRemove; i++) {
    const moveMe = items.shift();
    items.push(moveMe);
  }
  return items;
}
console.log(
  rotateArray(
    ["Bob", 71, { name: "JavaScript", type: "programming_language" }],
    10
  )
);
