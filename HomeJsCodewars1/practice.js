function fakeBin(x) {
  let array = [];
  let a = String(x);
  for (i = 0; i < a.length; i++) {
    if (a[i] < 5) {
      array.push(0);
    } else {
      array.push(1);
    }
  }
  a = array.join("");
  if (a.length === 0) {
    return 0;
  }
  return a;
}
