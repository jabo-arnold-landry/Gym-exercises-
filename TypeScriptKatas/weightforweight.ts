function orderWeight(strng: string): string {
  const arr = strng.split(" ");
  const orderedList: [string, number][] = [];
  arr.forEach((num) => {
    let results = calculateTotalNumber(Number(num));
    orderedList.push([num, results]);
  });

  return orderedList
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0].toString().localeCompare(b[0].toString());
      return a[1] - b[1];
    })
    .map((entry) => entry[0])
    .join(" ");
}

function calculateTotalNumber(num: number): number {
  if (num === 0) return 0;
  return Math.floor(calculateTotalNumber(num / 10)) + (num % 10);
}
console.log(orderWeight("103 123 4444 99 2000")); //test case one expected to equal: 2000 103 123 4444 99
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); //tets case two expected to equal to:  11 11 2000 10003 22 123 1234000 44444444 9999,
/*
 
** kata instruction

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

*/
