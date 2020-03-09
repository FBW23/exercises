// # Parents list

// Let's print all the elements that are parents of the element `cite` to the console.

// We want to print them as a string in the following format:
let cite = document.querySelector('cite');
let newArray = [];

for (let i=0; cite.parentElement ; i++){
    cite = cite.parentElement;
    console.log(cite)
}



// ```
// html > body > main > section > blockquote > footer > cite
// ```

// We want the string to start from the most outer parent to the element cite we started from.

// Extra: Can you also add to the same string the classes each parent has, for example: `section.page > blockquote`.