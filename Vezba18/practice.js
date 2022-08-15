// console.log(1);
// console.log(2);
// console.log(3);
// console.log(Boolean(3));
// console.log(Boolean(0));
// if (true) {
//   console.log("Ado");
// }

//falsy values su 0, "", '', null, undefined, NaN, false
//sve ostalo je truty fruty value
// a = prompt("Unesite broj 5");
// if (a % 2 == 0) {
//   console.log("Broj je paran");
// } else {
//   console.log("Nije paran broj");
// }

// a = prompt("Unesite prvi broj");
// b = prompt("Unesite drugi broj");
// if (a === b) {
//   console.log("Brojevi su jednaki");
// } else {
//   console.log("Brojevi su razliciti");
// }

//a = Number(prompt("Unesite prvi broj")); ovako se lakse parsira
a = Number(prompt("Unesite prvi broj"));
b = Number(prompt("Unesite drugi broj"));
c = Number(prompt("Unesite treci broj"));

if (a > b && a > c && b > c) {
  console.log(a + " je prvi broj");
  console.log(b + " je drugi broj");
  console.log(c + " je treci broj");
} else if (a > c && a < b && b > c) {
  console.log(b + " je prvi broj");
  console.log(a + " je drugi broj");
  console.log(c + " je treci broj");
} else if (c > a && c > b && a > b) {
  console.log(c + " je prvi broj");
  console.log(a + " je drugi broj");
  console.log(b + " je treci broj");
} else if (a > b && a > c && c > b) {
  console.log(a + " je prvi broj");
  console.log(c + " je drugi broj");
  console.log(b + " je treci broj");
} else if (c > a && c > b && b > a) {
  console.log(c + " je prvi broj");
  console.log(b + " je drugi broj");
  console.log(a + " je treci broj");
} else if (b > c && b > a && c > a) {
  console.log(b + " je prvi broj");
  console.log(c + " je drugi broj");
  console.log(a + " je treci broj");
}
