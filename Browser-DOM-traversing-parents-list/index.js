
let cite = document.querySelector("cite");
console.log(cite);

console.log(cite.parentNode)
//go up the ladder
let x = cite;
while(x.parentNode) {
    x = x.parentNode;
    //console.log(x);
}
let string = "";
while(x.ChildNodes) {
    string += x.tagName;
}
console.log(string);