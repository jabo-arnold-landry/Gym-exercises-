function prefill(n, v) {
  if (
    isNaN(n) ||
    n.toString().includes(".") ||
    typeof n === "boolean" ||
    Number(n) < 0
  )
    throw TypeError(`${n} is invalid`);
  if (Number(n) === 0) return [];

  const repeatedStr = `${v}`.repeat(n);
  const str = v;
  return [str, ...prefill(n - 1, v)];
}

/*
** Kata instruction**

Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined (None in Python, nil in Ruby)
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

*/
