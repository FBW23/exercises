// ## 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.


let wrapper=document.querySelector("#wrapper");
let children=wrapper.children;

console.log(wrapper);

// * Iterate over them and print their children to the console, as well as how many they are.


for(let i=0;i<children.length;i++){
    console.log(children)
    console.log(children.length)
}


// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.

// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.