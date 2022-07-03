function addition() {
  let a = parseInt(document.getElementById("firstNumber").value);
  let b = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").value = a + b;
}
function subtraction() {
  let a = parseInt(document.getElementById("firstNumber").value);
  let b = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").value = a - b;
}
function multiplication() {
  let a = parseInt(document.getElementById("firstNumber").value);
  let b = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").value = a * b;
}
function division() {
  let a = parseInt(document.getElementById("firstNumber").value);
  let b = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").value = a / b;
}
