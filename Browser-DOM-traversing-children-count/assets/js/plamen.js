// const wrapper = document.querySelector("#wrapper");
// const childrenOfTheWrapper = wrapper.childNodes;
// childrenOfTheWrapper.forEach(item => {
//   console.log(item.childNodes);
// })
// // console.log(childrenOfTheWrapper);


//Get the children of the element with id wrapper and
// print them to the console as a list.

const wrapper = document.getElementById("wrapper");
console.log(wrapper);

const children = wrapper.children;
console.log(children);
console.log(children.length);

for(let i = 0; i < children.length; i++) {
  const element = children[i];
  // console.log(element.children, element.children.length);
  console.log(element.children, element.childElementCount);
}

// 2 
function highestNumberOfClasses(node) {
  let returnObject =  {
    elementWithTheMostClasses: node[0],
    totalNumberOfClasses: node[0].classList.length
  }
  // now the logical part
  // assumption this could be the highest
  // let elementWithTheMostClasses = node[0];
  // let highestNumberOfClasses = node[0].classList.length;
  for(let i = 1; i < node.length; i++) {
    const element = node[i];
    console.log(element.classList, element.classList.length);
    // higher classes found => need to change the object properties values
    if(element.classList.length > returnObject.totalNumberOfClasses) {
      returnObject.totalNumberOfClasses = element.classList.length;
      returnObject.elementWithTheMostClasses = element;
    }
  }
  return returnObject;
}


console.log(highestNumberOfClasses(children));