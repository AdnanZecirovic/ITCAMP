firstAngle = Number(prompt("Unesite velicinu prvog ugla"));
secondAngle = Number(prompt("Unesite velicinu drugog ugla"));
thirdAngle = Number(prompt("Unesite velicinu treceg ugla"));
if (firstAngle + secondAngle + thirdAngle === 180) {
  console.log("Mozemo formirati trougao");
} else {
  console.log("Ne mozemo formirati trougao");
}
