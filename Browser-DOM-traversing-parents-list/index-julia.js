// # Parents list

// Let's print all the elements that are parents of the element `cite` to the console.

// We want to print them as a string in the following format:
let cite = document.querySelector('cite');
console.log(cite.parentElement);
let x = cite

//go up the letter
while(x.parentNode){
   x = x.parentNode;
//    console.log(x)
}

let str = '';
while (x.ChildNodes()){
    str += x.tagName;
    x = x.childNodes
}

// console.log(str)
// let newArray = [];
// let string = "";
// newArray.push(cite);

// const nodes = cite =>{
//     cite=cite.parentNode;
//     newArray.unshift(cite);
//     cite.parentNode && nodes(cite)
// };






// ```
// html > body > main > section > blockquote > footer > cite
// ```

// We want the string to start from the most outer parent to the element cite we started from.

// Extra: Can you also add to the same string the classes each parent has, for example: `section.page > blockquote`.