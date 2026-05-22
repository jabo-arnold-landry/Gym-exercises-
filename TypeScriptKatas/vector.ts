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
  toString() {
    return `(${this.components})`;
  }
}
declare global {
  interface Object {
    equals(obj: any): boolean;
  }
}

Object.prototype.equals = function (obj: any): boolean {
  // Vector vs Vector
  if (this instanceof Vector && obj instanceof Vector) {
    return (
      this.components.length === obj.components.length &&
      this.components.every((el, i) => el === obj.components[i])
    );
  }

  // Array vs Array
  if (Array.isArray(this) && Array.isArray(obj)) {
    return (
      this.length === obj.length &&
      this.every((el: any, i: number) => el === obj[i])
    );
  }

  // Array vs Vector
  if (Array.isArray(this) && obj instanceof Vector) {
    return (
      this.length === obj.components.length &&
      this.every((el: any, i: number) => el === obj.components[i])
    );
  }

  if (this instanceof Vector && Array.isArray(obj)) {
    return (
      this.components.length === obj.length &&
      this.components.every((el, i) => el === obj[i])
    );
  }

  // Plain object fallback
  if (typeof this === "object" && typeof obj === "object") {
    const keysA = Object.keys(this);
    const keysB = Object.keys(obj);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((k) => (this as any)[k] === obj[k]);
  }

  return this === obj;
};

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).equals(new Vector([4, 6, 8])));
