function splitTheBill(x) {
  const vls = Object.values(x);
  const keys = Object.keys(x);
  const emptyOb = {};
  let sum = 0;
  for (let i = 0; i < vls.length; i++) {
    sum += vls[i];
  }
  let avg = sum / vls.length;
  for (let i = 0; i < vls.length; i++) {
    emptyOb[keys[i]] = Math.round((vls[i] - avg) * 100) / 100;
  }
  return emptyOb;
}
