// /Write a program in C to display the n terms of odd natural number and their sum
let input = Number(prompt("Input a number"));
let summ = 0;
let n = input;
for (let i = 1; i <= input; i++) {
  if (i % 2 == 1) {
    console.log("Odd number is: " + i);
    summ += i;
  } else {
    input += 1;
  }
}
console.log("Summ is: " + summ);
