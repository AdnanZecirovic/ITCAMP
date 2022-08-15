num = Number(prompt("Unesite koliko je stepeni"));
if (num < 0) {
  console.log("It's freezing");
} else if (num >= 0 && num <= 10) {
  console.log("It's very cold");
} else if (num > 10 && num <= 20) {
  console.log("It's cold");
} else if (num > 20 && num <= 30) {
  console.log("It's normal");
} else if (num > 30 && num < 40) {
  console.log("It's hot");
} else if (num >= 40) {
  console.log("It's very hot");
} else {
  console.log("Error!");
}
