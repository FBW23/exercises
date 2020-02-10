const countLetters = (string) => {
  let object = {};
  let myString = string.toLowerCase();
  for (let index in myString) {
    if (object[myString[index]]) { // check if key/value is present
      object[myString[index]]++; // add only if already present
    } else {
      object[myString[index]] = 1; // push only if not present
    }
  }

  return object;
}
console.log(countLetters("tree"));
console.log(countLetters("PlpamenPlamen"));


