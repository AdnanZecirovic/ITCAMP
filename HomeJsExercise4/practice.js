//Write a program in C to read 10 numbers from keyboard and find their sum and average.
let summ = 0;
let avg = 0;
for (let i = 1; i <= 10; i++) {
  summ += Number(prompt("Unesite broj: "));
}
avg = summ / 10;
console.log("Summ of those 10 numbers is: " + summ);
console.log("Average of those 10 numbers is: " + avg);
