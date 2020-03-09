let elements = document.getElementsByTagName("*");

const printTheDomTree = arr => {
  let string = '';
  for (let i = 0; i < arr.length - 1; i++) {
    string += arr[i].tagName + '>';
  }
  console.log(string.toLowerCase());
}

printTheDomTree(elements);