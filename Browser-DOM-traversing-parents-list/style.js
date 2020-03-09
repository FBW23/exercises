// function printdiv(printpage)
// {
// let headstr = "<html><body><main><section><blackquote><footer><cite>";
// let footstr = "</body>";
// let newstr = document.all.item(printpage).innerHTML;
// let oldstr = document.body.innerHTML;
// document.body.innerHTML = headstr+newstr+footstr;
// window.print();
// document.body.innerHTML = oldstr;
// return false;
// }

// let a = document.querySelector('cite');
// console.log(a); 

// for (let i=0; i.parentElement; i++) {
//     a=a.parentElement;
//     console.log(a);
// }

const cite = document.querySelector('cite');

const array = [];
array.push(cite)
    const nodes = x => {
    x=x.parentNode;
    array.unshift(x);
    x.parentNode && nodes(x)
};
nodes(cite);

console.log(array);