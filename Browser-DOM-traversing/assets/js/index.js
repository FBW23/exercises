<<<<<<< HEAD
// **Instructions**:
// * Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. ![alt text](assets/images/header.png "Header")

document.querySelector('h1').closest('header').classList.add('borderGray');

// * If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border. ![alt text](assets/images/packages.png "Packages")

// PLAMEN SOLUTION
// const infoArray = document.querySelectorAll("section");
// infoArray.forEach(item => {
//   if(item.matches('.info-package') === true) {
//     const allPackageTitles = document.querySelectorAll(".package-title");
//     allPackageTitles.forEach(item => {
//       item.previousElementSibling.classList.add('imgBorder');
//     })
//   } else {
//     console.log('There is no .info-package')
//   }
// })

const infoArray = document.querySelector('.info');
const packages = document.querySelector('.info-package');
const allPackageTitles = document.querySelectorAll('.package-title');
=======
// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px. 
const h1 = document.querySelector('h1');
console.log(h1);
const header = h1.closest('header');
console.log(header);
// header.style.border = '5px solid darkblue';
header.classList.add('borderGray');

//If the .info section contains an .info-package, select all package-titles and give the title's previous element a border. 
const infoArray = document.querySelector(".info");
const packages = document.querySelector('.info-package');
const allPackageTitles = document.querySelectorAll(".package-title");
>>>>>>> def0d0e8b8a5301a645a74192e70400590f87071

if (infoArray.contains(packages)) {
    allPackageTitles.forEach(item => {
        item.previousElementSibling.classList.add('imgBorder');
    })
<<<<<<< HEAD
}

// * Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. ![alt text](assets/images/packages.png "Packages")

const allLables = document.querySelectorAll('label');
console.log(allLables);
allLables.forEach(label => {
    if (label.matches('.mild')) { // The matches() method checks to see if the Element would be selected by the provided selectorString -- in other words -- checks if the element "is" the selector.
        console.log('Found a mild one');
=======
};

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. 

const allLabels = document.querySelectorAll('label');
console.log(allLabels);
allLabels.forEach(label => {
    if (label.matches('.mild')) {
>>>>>>> def0d0e8b8a5301a645a74192e70400590f87071
        label.classList.add('borderYellow');
    } else if (label.matches('.intense')) {
        label.classList.add('borderOrange');
    } else {
        label.classList.add('borderRed');
    }
});

<<<<<<< HEAD
// * Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children. ![alt text](assets/images/footer.png "Footer").

const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');
const children = navList.children; // ???
=======
//Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children. 
const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');
const children = navList.children;
>>>>>>> def0d0e8b8a5301a645a74192e70400590f87071
console.log(children);
for (let i = 0; i < children.length; i++) {
    const newLi = document.createElement('li');
    const content = children[i].innerText;
    newLi.innerText = content;
    siteMap.append(newLi);
<<<<<<< HEAD
}
=======
}
>>>>>>> def0d0e8b8a5301a645a74192e70400590f87071
