// 1. Write a JavaScript program to display the current day and time
const dan = new Date();
dan.setDate(dan.getDate());
console.log("Today is: " + dan);

//Write a JavaScript program to rotate the string 'w3resource' in right direction by
//periodically removing one letter from the end of the string and attaching it to the front
let nameOfString = "w3resource";
// console.log(nameOfString.length);
// for (let i = nameOfString.length; i > 0; i--) {
//   nameOfString.slice(i);
//   console.log(nameOfString);
// }
let niz = "";
for (let i = nameOfString.length; i >= 0; i--) {
  niz += nameOfString.charAt(i);
}
console.log(niz);
