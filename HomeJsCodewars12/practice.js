function twinPrime(n) {
  let allNumbers = [];
  let primeNumbers = [];
  for (let i = 0; i <= n + 1; i++) {
    allNumbers[i] = i;
  }
  for (let i = allNumbers.length - 1; i > 0; i--) {
    let counter = 0;
    for (let j = 0; j <= i / 2; j++) {
      if (allNumbers[i] % allNumbers[j] === 0) {
        counter++;
      }
    }
    if (counter === 1 && allNumbers[i] > 1) {
      primeNumbers.push(allNumbers[i]);
    }
  }
  let newCounter = 0;
  for (let i = 0; i < primeNumbers.length; i++) {
    if (primeNumbers.includes(primeNumbers[i] + 2)) {
      newCounter++;
    }
  }
  return newCounter;
}
twinPrime(12);
