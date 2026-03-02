function alphanumeric(string: string): boolean {
  if (!string.trim().length) return false;
  const regex = /(\W|\s|_)/gim;
  if (!regex.test(string.trim())) return true;
  return false;
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); //false
console.log(alphanumeric("PassW0rd")); //true
console.log(alphanumeric("     ")); //false
