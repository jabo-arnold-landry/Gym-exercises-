// this a quick sort algorithms implementation using javascript

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let leftSide = [];
  let rightSide = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftSide.push(arr[i]);
    } else {
      rightSide.push(arr[i]);
    }
  }

  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}
console.log(quickSort([8, 2, 5, 3, 9, 4, 7, 6, 1]));
