function snail(array) {
  if (array.length === 0 || array[0].length === 0) return [];

  // Top row
  const top = array[0];
  // Right column
  const right = array.slice(1, -1).map((row) => row.pop());
  // Bottom row (reversed)
  const bottom = array.length > 1 ? array[array.length - 1].reverse() : [];

  // Left column (bottom to top)
  const left = array
    .slice(1, -1)
    .reverse()
    .map((row) => row.shift());

  // Middle matrix
  const middle = array.slice(1, -1).map((row) => row.slice(0));

  // Recursively process the middle
  return [...top, ...right, ...bottom, ...left, ...snail(middle)];
}

console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);
