function solution(number) {
  let arr = [];
  let secondArr = [];
  let sum = 0;
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      secondArr.push(arr[i]);
    } else if (i % 3 === 0) {
      secondArr.push(arr[i]);
    } else if (i % 5 === 0) {
      secondArr.push(arr[i]);
    } else {
    }
  }
  for (let i = 0; i < secondArr.length; i++) {
    sum += secondArr[i];
  }
  return sum;
}
solution(8);
