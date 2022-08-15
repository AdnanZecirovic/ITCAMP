profit = Number(prompt("Insert profit"));
loss = Number(prompt("Insert loss"));
if (profit > loss) {
  console.log("You have earned " + (profit - loss));
} else if (loss > profit) {
  console.log("You have lost " + (loss - profit));
} else {
  console.log("You are even");
}
