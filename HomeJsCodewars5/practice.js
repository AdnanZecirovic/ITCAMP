function findMultiples(integer, limit) {
  let num = integer;
  let lim = limit;
  let array = [];
  for (i = num; i <= lim; ) {
    array.push(i);
    i += num;
  }
  return array;
}
