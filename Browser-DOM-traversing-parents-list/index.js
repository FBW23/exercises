// let c = document.body.children;
// var x = document.getElementById("myLI").parentElement.nodeName;
// allParents = document.querySelector("cite").parents("*")
// let c = document.body.childNodes;

// function GetParents(id) {
//     let parents = document.querySelector("html" + id).childNodes("cite");
//     let selector = "";
//     for (var i = parents.length-1; i >= 0; i--) {
//         selector += parents[i].tagName + " ";
//     }

//     selector += "#" + id;

//     return selector;
// }

// let x = document.querySelector("cite");

const cite =document.querySelector('cite');
let x=cite;
while(x.parentNode){
    x=x.parentNode;
    // console.log(x)
}
let string='';
while(x.childElementCount){
    string+=x.tagName.toLowerCase()+' ';
    x=x.parentNode;
    console.log(string);
    console.log(x);
}
let array=string.split('<');
array=array.join('>');
console.log(string)


