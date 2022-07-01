let a = 25;
let b = 13;
console.log(typeof a);
console.log(typeof b);
let rezultat = a + b;
console.log(rezultat);
let counter = 0;
for (let i = 0; i < 15; i++) {
  rezultat += i;
  counter++;
  console.log(rezultat);
}
console.log(counter);
if (a == true && b == true) {
  console.log("Both values are true");
} else {
  console.log("At least one of the values is not true");
}
a == true;
b == true;
if (a && b) {
  console.log("Both values are true");
} else {
  console.log("At least one of the values is not true");
}
let text = "Otorinolaringologija";
console.log(text.slice(0, 5));
console.log(text.slice(5, 9));
console.log(text.charAt(5));
let firstNumber = 10;
let secondNumber = 13;
if (firstNumber >= secondNumber) {
  console.log(firstNumber + secondNumber);
} else {
  console.log(secondNumber - firstNumber);
}
let stringIsDumb = "random string";
let weirdResult = stringIsDumb + a;
console.log(weirdResult);
console.log(typeof weirdResult);
