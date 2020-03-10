
const wrapper = document.getElementById('wrapper');
console.log('wrapper');
const children = wrapper.children;
console.log(children);
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    const element = children[i];
    console.log(element.children, element.children.length);
    console.log(element.children, element.childElementCount); // second method
}

console.log(wrapper.childElementCount);

// Second Method counting children

// no.2

function highestNumberOfClasses(node) {
    let returnObject = {
        elementWithMostClasses: undefined,
        totalNumberOfClasses: 0
    };
    // now the logical part
let highestNumberOfClasses = node[0].classList.length;

    for (let i = 0; i < node.length; i++) {
        const element = node[i];
        console.log(element.classList, element.classList.length);
        if (element.classList.length > highestNumberOfClasses) {
            highestNumberOfClasses = element.classList.length;
            elementWithMostClasses =element;
        }
    }

    return returnObject;
}

console.log(highestNumberOfClasses(children));