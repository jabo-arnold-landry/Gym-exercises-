function josephusSurvivor(n: number, k: number):any{
  // your code here
  const arr = Array.from({length: n}, (_, i) => i + 1)
  if(n === 1) return arr
  
  arr.splice(k, 0)
  const newNumber = n - 1
  return josephusSurvivor(newNumber, k)
}

console.log(josephusSurvivor(7,3))