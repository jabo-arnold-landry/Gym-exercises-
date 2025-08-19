function toBase64(data) {
  const stringCharCodes = [];
  if (typeof data === "string") {
    data = data.split("").filter((element) => element !== " ");
  }

  if (!data.length) return "None";
  for (let char = 0; char < data.length; char++) {
    if (data[char] !== " ") {
      stringCharCodes.push(
        typeof data[char] === "string"
          ? data[char].charCodeAt(0).toString(2).padStart(8, "0")
          : data[char].toString(2).padStart(8, "0")
      );
    }
  }
  return encoder(stringCharCodes.join(""));
}

function encoder(code) {
  let results = "";
  let codes = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
  if (code.length < 2) return code;
  for (let i = 0; i < code.length; i += 6) {
    let chunk = code.substring(i, i + 6);
    let sixBitChunk = chunk.length < 6 ? chunk.padEnd(6, "0") : chunk;
    results += codes[parseInt(sixBitChunk, 2)];
  }
  return results;
}
console.log(toBase64("0,1"));
// console.log(encoder(["00000000"]));
const x = 0;
console.log(parseInt(x.toString(2), 2));
