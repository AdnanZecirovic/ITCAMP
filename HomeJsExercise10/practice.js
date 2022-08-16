let firstString =
  "AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBABABABABABABABABABABABABABABABABABABABABABABABABABABAAAAAAAAAAAAAAAAAAAAAAAAAAA";
let secondString =
  "AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
let lastLetter = firstString.charAt(firstString.length - 1);
let anotherLastLetter = secondString.charAt(secondString.length - 1);
if (lastLetter === "A") {
  console.log("Team A won");
} else {
  console.log("Team B won");
}
if (anotherLastLetter === "A") {
  console.log("Team A won");
} else {
  console.log("Team B won");
}
