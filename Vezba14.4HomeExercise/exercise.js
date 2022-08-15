function checking() {
  let numberToCheck = parseInt(document.getElementById("numberField").value);
  if (numberToCheck > 13) {
    document.getElementById("resultField").value = Math.abs(
      (numberToCheck - 13) * 2
    );
  } else {
    document.getElementById("resultField").value = Math.abs(numberToCheck - 13);
  }
}
