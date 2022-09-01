function likes(names) {
  const allNames = {};
  for (let i = 0; i < names.length; i++) {
    if (allNames[names[i]]) {
      allNames[names[i]] = names[s[i]] + 1;
    } else {
      allNames[names[i]] = 1;
    }
  }
  const someKeys = Object.keys(allNames);
  let oneName = someKeys[0] + " likes this";
  let numOfPeople = someKeys.length - 2;
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return oneName;
  } else if (names.length === 2) {
    return someKeys[0] + " and " + someKeys[1] + " like this.";
  } else if (names.length === 3) {
    return (
      someKeys[0] + ", " + someKeys[1] + " and " + someKeys[3] + " like this."
    );
  } else {
    return (
      someKeys[0] +
      ", " +
      someKeys[1] +
      " and " +
      numOfPeople +
      " others like this."
    );
  }
}
likes(["Adnan", "Kemal"]);
