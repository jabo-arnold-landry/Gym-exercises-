function helper(callback, value) {
  return typeof callback === "function" ? callback(value) : value;
}

function zero(callback) {
  const value = 0;
  return helper(callback, value);
}
function one(callback) {
  const value = 1;
  return helper(callback, value);
}
function two(callback) {
  const value = 2;
  return helper(callback, value);
}
function three(callback) {
  const value = 3;
  return helper(callback, value);
}
function four(callback) {
  const value = 4;
  return helper(callback, value);
}
function five(callback) {
  const value = 5;
  return helper(callback, value);
}
function six(callback) {
  const value = 6;
  return helper(callback, value);
}
function seven(callback) {
  const value = 7;
  return helper(callback, value);
}
function eight(callback) {
  const value = 8;
  return helper(callback, value);
}
function nine(callback) {
  const value = 9;
  return helper(callback, value);
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}
function minus(a) {
  return function (b) {
    return a - b;
  };
}
function times(a) {
  return function (b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function (b) {
    return Math.floor(a / b);
  };
}

console.log(zero(plus(five())));
