// * Get the children of the element with id `wrapper` and print them to the console as a list.

const wrapper = document.getElementById('wrapper');
console.log(wrapper);

const children = wrapper.children;
console.log(children);
console.log(children.length);



// * Iterate over them and print their children to the console, as well as how many they are.
// Note: There are 2 ways to print the number of children - give them both a try.

for (let i = 0; i < children.length; i++) {
    const element = children[i];
    console.log(element.children, element.children.length);
    // second method
    // console.log(element.children, element.childElementCount);
}


// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

// For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

// Let's write a function that returns an object that contains the element with the most classes and the total number of classes.

function highestNumberOfClasses(node) {
    let returnObject = {
        elementWithTheMostClasses: node[0],
        totalNumberOfClasses: node[0].classList.length
    };
    for (let i = 1; i < node.length; i++) {
        const element = node[i];
        // console.log(element.classList, element.classList.length);
        if (element.classList.length > returnObject.totalNumberOfClasses) {
            returnObject.totalNumberOfClasses = element.classList.length;
            returnObject.elementWithTheMostClasses = element;
        }
    }
    return returnObject;
}
console.log(highestNumberOfClasses(children));