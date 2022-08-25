function twiceAsOld(dadYearsOld, sonYearsOld) {
  let father = Number(dadYearsOld);
  let son = Number(sonYearsOld);
  let f = father;
  let s = son;
  for (let i = 0; i < father; i++) {
    if (f === s * 2) {
      return i;
    }
    if (s === 0 || f === 0) {
      break;
    }
    f--;
    s--;
  }
  for (let j = 0; j < father; j++) {
    if (father === son * 2) {
      return j;
    }
    father++;
    son++;
  }
}
