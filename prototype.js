function See(name) {
  this.name = name;
}
See.prototype.displayInfo = function () {
  return this.name;
};
const seeOne = new See("jabo");
console.log(seeOne.name);
console.log(seeOne.displayInfo());
