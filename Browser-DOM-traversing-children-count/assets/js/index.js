// ## 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.

// * Iterate over them and print their children to the console, as well as how many they are.

// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.

const wrapper = document.getElementById('wrapper');
// console.log(wrapper);
const children = wrapper.children; // property of the node
// console.log(children);
// console.log(children.length);

for (let i = 0; i < children.length; i++) {
    // console.log(children[i].tagName); // The tagName property returns the tag name of the element. (in a cumulatory way)
    const element = children[i];
    // console.log(element.children, element.children.length);
    // console.log(element.children, element.childElementCount);
}

console.log('printing wrapper children:', wrapper.childElementCount);

// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.

function highestNumberOfClasses(node) {
    let returnObject = {
        elementWithTheMostClasses: node[0],
        totalNumberOfClasses: node[0].classList.length
    };
    // let elementWithTheMostClasses = node[0];
    // let highestNumberOfClasses = node[0].classList.length;
    // now the logical part
    for (let i = 0; i < node.length; i++) {
        const element = node[i];
        // console.log('element classlist', element.classList.length);
        if (element.classList.length > highestNumberOfClasses) {
            highestNumberOfClasses = element.classList.length;
            elementWithTheMostClasses = element;
        }
    }

    return returnObject;
}

console.log(highestNumberOfClasses(children));