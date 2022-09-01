function isIsogram(str) {
  str = str.toLowerCase();
  console.log(str);
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      return false;
    } else {
      map[str[i]] = 1;
    }
  }
  return true;
}
