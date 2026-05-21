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
}
declare global {
  interface Object {
    equals(obj: any): boolean;
  }
}

Object.prototype.equals = function (obj: any): boolean {
  // Case 1: Vector comparison
  if (this instanceof Vector && obj instanceof Vector) {
    return (
      this.components.length === obj.components.length &&
      this.components.every((el, i) => el === obj.components[i])
    );
  }

  // Case 2: Array comparison
  if (Array.isArray(this) && Array.isArray(obj)) {
    return (
      this.length === obj.length &&
      this.every((el: any, i: number) => el === obj[i])
    );
  }

  // Case 3: Plain object comparison
  if (typeof this === "object" && typeof obj === "object") {
    const keysA = Object.keys(this);
    const keysB = Object.keys(obj);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((k) => (this as any)[k] === obj[k]);
  }

  // Case 4: Primitive fallback
  return this === obj;
};

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.equals(new Vector([4, 6, 80])));
