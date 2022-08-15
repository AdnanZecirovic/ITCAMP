//Write a program in C to display n terms of natural number and their sum
let summ = 0;
let unos = Number(prompt("Insert a number"));
for (let i = 0; i <= unos; i++) {
  summ += i;
}
console.log("The summ of numbers up to " + unos + " is " + summ);
