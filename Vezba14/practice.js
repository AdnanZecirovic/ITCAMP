// let maxi = "PrODAvnica";
// let maxiMalo = maxi.toLowerCase();
//string je immutable, tj ne moze da se promeni vrednost njegova,
// console.log(maxiMalo);
// let ime = "Adnan";
// let prezime = " Zecirovic";
// // let imeIPrezime = ime + prezime;
// let imeIPrezime = `${ime} ${prezime}`;
//ovo iznad je template literal, koristi se najvise.
// console.log(imeIPrezime);
//u javascriptu string i broj mozemo da saberemo ali dobijamo string.
//taj string kasnije moze da se parsira ko i u ostalim programskim jezicima
//za javascript undifined je false na startu, prazan string je false
//null je false na startu, broj 0 je false, NaN je false.
// let nekoIme = "Adnan" && "Zecirovic";
// console.log(nekoIme);
//vraca zadnju stvar koja je istina
let nekoIme = "Adnan" || "Zecirovic";
console.log(nekoIme);
//kada je ili vraca prvu istinitu vrednost, kada je "i" vraca poslednju istinitu vrednost u slucaju da su sve ostale istinite
//negacija se pravi kada ispred bilo koje vrednosti stavimo znak uzvika !
//
