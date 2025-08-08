const targetGame = (vals) => {
  let include = 0;
  let exclude = 0;

  for (let val of vals) {
    const newInclude = exclude + val;
    const newExclude = Math.max(include, exclude);
    include = newInclude;
    exclude = newExclude;
  }

  return Math.max(include, exclude);
};

console.log(targetGame([1, 3, 1]));
