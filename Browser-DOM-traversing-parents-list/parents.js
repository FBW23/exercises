// const first = document.querySelector('cite').parentNode.nodeName;
// console.log(first);

// const second = document.querySelector('quote-footer').parentNode.nodeName;
// console.log(second);

const x = document.querySelector('cite');
let string = '';
while (x.parentNode) {
    string += x.tagName.toLowerCase() + ' ';
    x = x.parentNode;
    console.log(string)
    console.log(x);
}
let array = string.trim().split(' ');

console.log(array);
array = array.reverse();
console.log(array);
string = array.join(' > ');
console.log(string);