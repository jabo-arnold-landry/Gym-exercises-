function topFrequent(nums, k) {
  // code me
  const objArr = nums.reduce((map, num, index) => {
    if (!map.has(num)) {
      map.set(num, { count: 0, index });
    }
    map.get(num).count++;
    return map;
  }, new Map());

  //sorting data
  const sorted = [...objArr.entries()].sort((a, b) => {
    const [numA, objA] = a;
    const [numB, objB] = b;

    //sorting based on counts
    if (objA.count !== objB.count) return objB.count - objA.count;

    //sorting based on index
    return objA.index - objB.index;
  });
  return nums.length > k
    ? sorted.slice(0, k).map((nums) => nums[0])
    : sorted.map((nums) => nums[0]);
}

/*
Kata description: 
write a function that takes in array of numbers nums and a number k and returns an array with the k most frequent numbers in nums

Test Cases:

 - topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 1) === [1]
 - topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 2) ===  [1, 2]
 - topFrequent([1, 1, 1, 5, 5, 2, 2, 3], 3) === [1, 5, 2] // When nums have the same frequency, return  it based on index
- topFrequent([9, 8, 7, 6, 5, 4, 3, 2, 1], 100) === [9, 8, 7, 6, 5, 4, 3, 2, 1]

k is larger than nums length, so everything is returned
*/