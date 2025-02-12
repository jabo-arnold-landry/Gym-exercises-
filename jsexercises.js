//calculating the largest number

//initialization of variables
const a = 23;
const b = 34;

//checking for the largest number
a > b ? console.log("a is the largest") : console.log("b is the largest");

//sorting numbers

const nums = [0, 4, -1];
nums.sort((a, b) => a - b); // function to sort numbers
console.log(nums);

//iterating through 15 numbers and showing if it is odd or even

for (let num = 1; num < 14; num++) {
  //looping through numbers from 0 to 15
  num % 2 === 0 ? console.log("even number") : console.log("odd number"); //displaying the number status
}

//who liked it program

function whoLikedIt(arr) {
  if (arr.length === 0) {
    return "no one likes it";
  } else if (arr.length === 1) {
    return `${arr[0]} likes it`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like it`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like it`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like it`;
  }
}

// Example usage
console.log(whoLikedIt(["Alice", "Bob", "Charlie", "Dave"])); // Output: "Alice, Bob and 2 others like it"

// capitalizing each word of the sentence '
function capitalize(word) {
  return word.replace(/\b\w/g, (match) => match.toUpperCase());
}

console.log(capitalize("jabo arnold landry"));
