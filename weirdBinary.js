function skrzat(type, input) {
  return type.toLowerCase() === "b"
    ? fromBinary(input)
    : type.toLowerCase() === "d"
    ? convertToBinary(input)
    : "Unknown operation";
}

const fromBinary = (digits) => {
  digits = digits.split("").reverse().join("");
  let sum = 0;

  for (let digit in digits) {
    const convertedDigit = +digits[digit] * Math.pow(-2, digit);
    sum += convertedDigit;
  }

  return `From binary: ${digits.padStart(5, 0)} is ${sum}`;
};

const convertToBinary = (number) => {
  if (isNaN(number)) return "Only real numbers are allowed";
  let currNumber = number;
  let remainders = [];
  number = number;

  while (currNumber) {
    let answer = currNumber / -2;
    let remainder = currNumber % -2;

    if (remainder < 0) {
      remainder = remainder + 2;
    }

    remainders.unshift(Math.abs(remainder));
    answer = remainder + Math.floor(answer);
    currNumber = answer;
  }

  return `From decimal: ${number} is ${remainders.join("").padStart(5, 0)}`;
};

console.log(skrzat("b", "1001101")); //From binary: 1001101 is 61
console.log(skrzat("b", "0111111")); //From binary: 0111111 is -21
console.log(skrzat("b", "101001000100001")); //From binary: 101001000100001 is 19937
console.log(skrzat("b", "010010001000010")); //From binary: 010010001000010 is -7106
console.log(skrzat("b", "100110100110100")); //From binary: 100110100110100 is 15604
console.log(skrzat("d", -137)); //From decimal: -137 is 10001011
console.log(skrzat("d", 137)); //From decimal: 137 is 110011001
console.log(skrzat("d", 8191)); //From decimal: 8191 is 110000000000011
console.log(skrzat("d", -10000)); //From decimal: -10000 is 10100100110000
console.log(skrzat("d", 21000)); //From decimal: 21000 is 101011000011000
