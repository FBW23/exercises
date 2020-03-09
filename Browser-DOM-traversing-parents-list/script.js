// let elements = document.getElementsByTagName("*");

// const printTheDomTree = arr => {
//   let string = '';
//   for (let i = 0; i < arr.length; i++) {
//     string += arr[i].tagName + '>';
//   }
//   console.log(string.toLowerCase());
// }

// printTheDomTree(elements);

let nodes = [];
let str = '';
let element = document.querySelector('cite');

nodes.push(element);
while (element.parentNode) {
  nodes.unshift(element.parentNode);
  element = element.parentNode;
}

for (let i = 1; i < nodes.length; i++) {
  str += nodes[i].tagName + ' > ';
}

console.log(str.toLowerCase());