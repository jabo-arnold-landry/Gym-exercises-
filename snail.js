let snail = function (array) {
  let results = [];
  let counter = 1;
  do {
    results.push(...array[0].slice(0, 3));
  } while (counter < results);
  {
    for (let i = 0; i < array[counter].reverse().length; i++) {
      results.push(array[counter][i]);
    }
    counter += 1;
  }
  return results;
};
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
