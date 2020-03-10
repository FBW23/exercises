// <!-- # Parents list

// Let's print all the elements that are parents of the element `cite` to the console.

let cite = document.querySelector("cite");
let parent = cite.parentNode;
// console.log(parent);
// parent = parent.parentNode
// console.log(parent);
// parent = parent.parentNode
// console.log(parent);
// parent = parent.parentNode
// console.log(parent);
// parent = parent.parentNode
// console.log(parent);
// parent = parent.parentNode
// console.log(parent);
let x = cite;
<<<<<<< HEAD
while(x.parentNode){
    x=x.parentNode;
    
    
}

let string="";


=======
let string = '';
while (x.parentNode) {
    string += x.tagName.toLowerCase() + ' ';
    x = x.parentNode;
    //console.log(string)
    //console.log(x);
>>>>>>> b3fd307a8aa773b3f1d01a56bfe63bdb9906f67a
}

<<<<<<< HEAD

// let list = []
// for (let i = 0; parent.parentNode; i++) {
//     let cite = document.querySelector("cite");
//     let parent = cite.parentNode;
//     list.push(parent)

//     parent = parent.parentNode;


// }
// console.log(list)



// We want to print them as a string in the following format:

// ```
// html > body > main > section > blockquote > footer > cite
// ```

// We want the string to start from the most outer parent to the element cite we started from.

// Extra: Can you also add to the same string the classes each parent has, for example: `section.page > blockquote`. -->
=======
//console.log(array);
array = array.reverse();
//console.log(array);
string = array.join(' > ');
console.log(string);
>>>>>>> b3fd307a8aa773b3f1d01a56bfe63bdb9906f67a
