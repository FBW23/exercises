

// const cite = document.querySelector('cite');

// const array = [];
// let string = '';
// array.push(cite);

//     const nodes = x => {
//     x=x.parentNode;
//     array.unshift(x);
 
//     x.parentNode && nodes(x);
// };
// nodes(cite);

// array.map(x => string += `${x.tagName} > `);

// console.log(array);

const cite = document.querySelector('cite');
// console.log(cite);
// console.log(cite.parentNode);
// go up the ladder
let x = cite;
let string = '';
while(x.parentNode) {
    string += x.tagName.toLowerCase() + ' ';
    x = x.parentNode;
    console.log(string);
    console.log(x);
}
let array = string.trim().split(' ');
console.log(array);
array=array.reverse();
string = array.join(' > ');
console.log(string);

