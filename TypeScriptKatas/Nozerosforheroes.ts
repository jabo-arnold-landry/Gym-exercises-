function removeEndZero(nbr: number) {
  const array = nbr.toString().trim().split("").reverse();
  const copy: string[] = array.slice();
  for (let num of array) {
    if (+num === 0) copy.splice(array.indexOf(num), 1);
    if (+num !== 0) break;
  }
  return Number(copy.reverse().join(""));
}
console.log(removeEndZero(0));

// --------------
/* test cases */
/*
 1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
*/
//--------
