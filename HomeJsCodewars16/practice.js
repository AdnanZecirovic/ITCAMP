function maskify(cc) {
  let arr = [];
  for (let i = 0; i < cc.length; i++) {
    arr.push(cc[i]);
  }
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "#";
  }
  let together = arr.join("");
  return together;
}
maskify("Something something random reeeeeeeeeeee");
