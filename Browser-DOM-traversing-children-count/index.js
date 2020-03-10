const wrapper=document.getElementById('wrapper');
console.log(wrapper)
const children=wrapper.children;
console.log(children);
console.log(children.length);
for (let i=0;i<children.length;i++){
    const element=children[i];
    console.log(element.children.length)
}
function highestNumberOfClasses(node){
let returnObject={
    elementWithTheMostClasses:node[0].classList.length,
    totalNumberOfClasses:node[0].classList.length,
};for(let i=0;i<node.length;i++){
    const element=node[i];
    console.log(element.classList,element.classList.length)
    if(element.classList.length>highestNumberOfClasses){
        highestNumberOfClasses=element.classList.length;
        elementWithTheMostClasses=element;
    }
}
return returnObject;
}
console.log(highestNumberOfClasses(children))