type ArrOrObjType = number[] | Vector;
class Vector {
  public components: number[];
  constructor(components: number[]) {
    this.components = components;
  }

  add(arr: ArrOrObjType) {
    if (!Array.isArray(arr) && typeof arr === "object") arr = arr["components"];

    if (arr.length !== this.components.length) {
      throw Error("length of arrays must be equal!");
    }

    return arr.map((num, index) => num + this.components[index]!);
  }

  subtract(arr: ArrOrObjType) {
    if (!Array.isArray(arr) && typeof arr === "object") arr = arr["components"];

    if (arr.length !== this.components.length)
      throw Error("length of arrays must be equal!");

    return arr.map((num, index) => num - this.components[index]!);
  }

  dot(arr: ArrOrObjType) {
    if (!Array.isArray(arr) && typeof arr === "object") arr = arr["components"];

    if (arr.length !== this.components.length)
      throw Error("length of arrays must be equal!");
    return arr
      .map((num, index) => num * this.components[index]!)
      .reduce((sum, num) => (sum += num), 0);
  }

  norm() {
    const result = this.components
      .map((num) => Math.pow(num, 2))
      .reduce((sum, num) => (sum += num));
    return Math.sqrt(result);
  }

  equals(arr: ArrOrObjType) {
    if (!Array.isArray(arr) && typeof arr === "object") arr = arr["components"];

    if (arr.length !== this.components.length) return false;
    const booleanValues = arr.map((num, index) => {
      if (num !== this.components[index]!) return false;
    });
    return booleanValues.includes(false) ? false : true;
  }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.dot(b));
console.log(a.equals(b));
