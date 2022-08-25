const quarterOf = (month) => {
  let m = Number(month);
  if (m < 4) {
    console.log(m);
    return 1;
  }
  if (m >= 4 && m < 7) {
    console.log(m);
    return 2;
  }
  if (m >= 7 && m < 10) {
    console.log(m);
    return 3;
  }
  if (m >= 10) {
    console.log(m);
    return 4;
  }
};
