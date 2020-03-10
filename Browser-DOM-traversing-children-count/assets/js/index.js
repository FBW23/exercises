//Get the children of the element with id wrapper and print them to the console as a list.

const wrapper = document.querySelector('#wrapper');
console.log(wrapper);
const children = wrapper.children;
console.log(children)
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    const element = children[i];
    console.log(element.children);
}