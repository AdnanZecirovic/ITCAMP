function positiveSum(arr) {
  let summ = 0;
  let array = arr;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      summ += array[i];
    }
  }
  return summ;
}
