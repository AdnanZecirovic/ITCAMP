String.prototype.isUpperCase = function () {
  return String(this) === this.toUpperCase();
};
let random = "Some Random texttttt";
let random2 = "SOME RANDOM TEXT";
let random3 = "some random texttttt";
console.log(random.isUpperCase());
console.log(random2.isUpperCase());
console.log(random3.isUpperCase());
