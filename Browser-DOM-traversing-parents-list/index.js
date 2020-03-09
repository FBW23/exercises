const cite = document.querySelector('cite');
//console.log(cite);
//console.log(cite.parentNode);
// go up the ladder
let x = cite;
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