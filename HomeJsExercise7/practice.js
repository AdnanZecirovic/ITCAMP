//Write a program in C to display the multiplication table vertically from 1 to n.
let input = Number(prompt("Input upto the table number starting from 1."));
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= input; j++) {
    console.log(j + " x " + i + " = " + j * i);
  }
}
