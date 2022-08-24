function removeChar(str) {
  let word = String(str);
  let newWord = word.slice(0, word.length - 1);
  newWord = newWord.slice(1);
  console.log(newWord);
  return newWord;
}
