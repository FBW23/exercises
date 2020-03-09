// * Select the `header` that is the closest to the first `h1` heading. 
// Give the `header` a solid border of 5px. ![alt text](assets/images/header.png "Header")

document.querySelector('h1').closest('header').classList.add('borderGray');

// * If the `.info` section contains an `.info-package`, select all `package-title`s 
// and give the title's previous element a border. ![alt text](assets/images/packages.png "Packages")

const infoArray = document.querySelector('.info');
const packages = document.querySelector('info-package');
const allPackageTitles = document.querySelectorAll('.package-title');

if (infoArray.contains(packages)) {
    allPackageTitles.forEach(item => {
        item.previousElementSibling.classList.add('imgBorder');
    })
};


// * Check if the label's class matches "mild". If so, give the label a yellow solid border. 
// If the label's class matches "intense", give the label an orange solid border. 
// If the class does not match either, give the label a red solid border. 
// ![alt text](assets/images/packages.png "Packages")

const allLabels = document.querySelectorAll('label');

allLabels.forEach(label => {
    if (label.matches('.mild')) {
        label.classList.add('borderYellow');
    } else if (label.matches('.intense')) {
        label.classList.add('borderOrange');
    } else {
        label.classList.add('borderRed');
    }
});


// * Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. 
// Note: the `.nav-list` should still contain its children. 
// ![alt text](assets/images/footer.png "Footer")

const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');
const children = navList.children;
console.log(children);

for (let i = 0; i < children.length; i++) {
    const newLi = document.createElement('li');
    const content = children[i].innerText;
    newLi.innerText = content;
    siteMap.append(newLi);
}



// **Bonus**
// After you completed the assignment and published the solution branch, 
// you can create a new branch `feature/restyle` and change the design of the landing-page. 
// You can publish it on GitHub Pages when you are satisfied with the result.