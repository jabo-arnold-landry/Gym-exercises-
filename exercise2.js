// const result = (text, markers) => {
//   // regular expression constructor
//   const regex = new RegExp(`\\s*[${markers.join("")}].*$`, "gm");
//   return text.replace(regex, " ");
// };

// console.log(result("apples, pears # and bananas", ["#"]));
// // raindrops
// function rainDrops(drop) {
//   if (drop % 3 === 0) {
//     return "Plig";
//   } else if (drop % 5 === 0) {
//     return "Plang";
//   } else if (drop % 3 === 0 && drop % 5 === 0) {
//     return "PlingPlong";
//   } else if (drop % 7 === 0) {
//     return "Plong";
//   } else {
//     return drop;
//   }
// }
// console.log(rainDrops(15));

// function transform(value) {
//   const valueString = value.toString();
//   const numDigits = valueString.length;
//   let sum = 0;
//   for (let i = 0; i <= numDigits; i++) {
//     sum += Math.pow(parseInt(valueString[i]), numDigits);
//   }
//   return sum === value;
// }
// console.log(transform(7));
// // sorting out letters

// function longest(s1, s2) {
//   // your code
//   const combined = s1 + s2;
//   const uniqueChars = new Set(combined);
//   const arr = Array.from(uniqueChars);
//   return arr.sort().join("");
// }
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// duplicateEncoder
// function duplicateEncode(word) {
//   // ...
//   word = word.toLowerCase();
//   const charCount = {};
//   for (let char of word) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return word
//     .split("")
//     .map((char) => (charCount[char] > 1 ? ")" : "("))
//     .join("");
// }
// console.log(duplicateEncode("Success"));

// // addition of two lowest number in an array
// function sumTwoSmallestNumbers(numbers) {
//   // Code here
//   let sum = 0;
//   const minNums = numbers.sort((a, b) => a - b).slice(0, 2);
//   return minNums.reduce((acc, ele) => {
//     acc += ele;
//     return acc;
//   });
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// function goodVsEvil(good, evil) {
//   // Worth values for each race
//   const goodWorth = [1, 2, 3, 3, 4, 10];
//   const evilWorth = [1, 2, 2, 2, 3, 5, 10];

//   // Parse input strings into arrays of integers
//   const goodCounts = good.split(" ").map(Number);
//   const evilCounts = evil.split(" ").map(Number);

//   // Calculate total worth for good and evil sides
//   const goodScores = goodCounts.reduce(
//     (acc, count, i) => acc + count * goodWorth[i],
//     0
//   );
//   const evilScores = evilCounts.reduce(
//     (acc, count, i) => acc + count * evilWorth[i],
//     0
//   );

//   // Determine the result based on total scores
//   if (goodScores > evilScores) {
//     return "Battle Result: Good triumphs over Evil";
//   } else if (goodScores < evilScores) {
//     return "Battle Result: Evil eradicates all trace of Good";
//   } else {
//     return "Battle Result: No victor on this battle field";
//   }
// }

// console.log(goodVsEvil("1 2 3 4 5 6", "1 2 3 4 5 6 7"));
class pagination {
  constructor(collection, itemPerPage) {
    this.collection = collection;
    this.itemPerPage = itemPerPage;
    this.pages = [];
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    for (let i = 0; i < this.collection.length; i += this.itemPerPage) {
      this.pages.push(this.collection.slice(i, i + this.itemPerPage));
    }
    return this.pages;
  }
  pageItemCount(pageIndex) {
    if (this.pages[pageIndex]) {
      return this.pages[pageIndex].length;
    } else {
      return -1;
    }
  }
  pageIndex(itemIndex) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].includes(itemIndex)) {
        return i;
      }
    }
    return -1;
  }
}
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const paginationHelper = new pagination(items, 10);
console.log(paginationHelper.pageCount());
console.log(paginationHelper.itemCount());
console.log(paginationHelper.pageItemCount(0));
console.log(paginationHelper.pageIndex("h"));
