//Check to see if the string entered via prompt is palindrom or not
let unos = prompt("Enter some text");
let array1 = [];
let array2 = [];
let unos1 = unos.replace(/\s+/g, "");
for (let i = 0; i < unos1.length; i++) {
  array1.push(unos1[i]);
}
//console.log(array1);
for (let i = unos1.length - 1; i >= 0; i--) {
  array2.push(unos1[i]);
}
//console.log(array2);
for (let i = 0; i < unos1.length; i++) {
  if (array1[i] === array2[i]) {
    console.log("This is a palindrome");
  } else {
    console.log("This is not a palindrome");
    break;
  }
}
