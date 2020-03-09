// Let's print all the elements that are parents of the element `cite` to the console.

// We want to print them as a string in the following format:

// ```
// html > body > main > section > blockquote > footer > cite
// ```
const cite = document.querySelector('cite');
const array = [];
let string = '';
array.push(cite);
    const nodes = x => {
    x=x.parentNode;
    array.unshift(x);
    x.parentNode && nodes(x);
};
nodes(cite);
array.map(x => string += `${x.tagName}  > `);
console.log(array);

