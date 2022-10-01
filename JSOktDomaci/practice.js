unos = document.getElementById("unos");
kontejner = document.getElementById("kontejner");
lista = document.getElementById("lista");
dugme = document.getElementById("adding");
dugme.addEventListener("click", (element) => {
  element = document.createElement("h3");
  element.innerText = unos.value;
  element.style.fontSize = "20px";
  element.style.fontStyle = "normal";
  element.style.color = "black";
  element.style.backgroundColor = "white";
  lista.appendChild(element);
  unos.value = "";
});
