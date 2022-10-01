// naslov = document.getElementById("text");
// function a() {
//   console.log("CLICK NASLOV");
//   naslov.style.backgroundColor = "red";
//   naslov.style.color = "white";
//   naslov.innerText = "Lul";
// }
// naslov.addEventListener("click", a);

// unos = document.getElementById("unos");
// unos.addEventListener("input", (e) => {
//   console.log("nesto se desilo u input");
//   console.log(e.target.value);
// });

// naslov.addEventListener("click", (el) => {
//   el = document.createElement("h3");

//   el.innerText = "Adnan";
//   el.style.fontSize = "34px";
//   el.style.color = "purple";

//   document.body.appendChild(el);
// });
unos = document.getElementById("unos");
kontejner = document.getElementById("kontejner");
// unos.addEventListener("change", (e) => {
//   element = document.createElement("h3");
//   //   element.innerText = unos.value;
//   element.innerText = e.target.value;
//   element.style.fontSize = "34px";
//   element.style.color = "purple";
//   kontejner.appendChild(element);
// });
dugme = document.getElementById("submit");
dugme.addEventListener("click", (element) => {
  element = document.createElement("h3");
  element.innerText = unos.value;
  element.style.fontSize = "34px";
  element.style.color = "purple";
  kontejner.appendChild(element);
  unos.value = "";
});
