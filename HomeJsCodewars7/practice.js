function sameCase(a, b) {
  let firstLetter = String(a);
  let secondLetter = String(b);
  let lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upper = [];
  for (i = 0; i < lower.length; i++) {
    upper.push(lower[i].toUpperCase());
  }
  if (
    (lower.includes(firstLetter) && lower.includes(secondLetter)) ||
    (upper.includes(firstLetter) && upper.includes(secondLetter))
  ) {
    return 1;
  }
  if (
    (lower.includes(firstLetter) && upper.includes(secondLetter)) ||
    (upper.includes(firstLetter) && lower.includes(secondLetter))
  ) {
    return 0;
  }
  if (
    (!lower.includes(firstLetter) && upper.includes(secondLetter)) ||
    (!upper.includes(firstLetter) && lower.includes(secondLetter)) ||
    (upper.includes(firstLetter) && !lower.includes(secondLetter)) ||
    (lower.includes(firstLetter) && !upper.includes(secondLetter)) ||
    (!lower.includes(firstLetter) && !upper.includes(secondLetter)) ||
    (!upper.includes(firstLetter) && !lower.includes(secondLetter))
  ) {
    return -1;
  }
}
