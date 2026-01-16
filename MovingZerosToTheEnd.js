function moveZeros(arr) {
  const nonZero = arr.filter((element) => element !== 0);
  const zero = arr.filter((element) => element === 0);
  return [...nonZero, ...zero];
}

//Kata description
/*
Kata Description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

//kata test case
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
