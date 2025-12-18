function createPromise(number) {
  return new Promise((res, rej) => {
    number >= 0 ? res("It's positive!") : res("It's negative!");
  });
}
createPromise(4)
  .then((res) => res)
  .catch((err) => console.log(err));
export { createPromise };
