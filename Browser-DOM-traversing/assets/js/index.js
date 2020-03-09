<<<<<<< HEAD
// * Select the `header` that is the closest to the first `h1` heading. 
// Give the `header` a solid border of 5px. ![alt text](assets/images/header.png "Header")

document.querySelector('h1').closest('header').classList.add('borderGray');

// * If the `.info` section contains an `.info-package`, select all `package-title`s 
// and give the title's previous element a border. ![alt text](assets/images/packages.png "Packages")

const infoArray = document.querySelector('.info');
const packages = document.querySelector('info-package');
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
>>>>>>> 98dc5440db84ac10902c5b49aceb6201320b1031

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

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. 

const allLabels = document.querySelectorAll('label');
console.log(allLabels);
allLabels.forEach(label => {
    if (label.matches('.mild')) {
        label.classList.add('borderYellow');
    } else if (label.matches('.intense')) {
        label.classList.add('borderOrange');
    } else {
        label.classList.add('borderRed');
    }
});

<<<<<<< HEAD

// * Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. 
// Note: the `.nav-list` should still contain its children. 
// ![alt text](assets/images/footer.png "Footer")

=======
//Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children. 
>>>>>>> 98dc5440db84ac10902c5b49aceb6201320b1031
const navList = document.querySelector('.nav-list');
const siteMap = document.querySelector('.site-map');
const children = navList.children;
console.log(children);
<<<<<<< HEAD

=======
>>>>>>> 98dc5440db84ac10902c5b49aceb6201320b1031
for (let i = 0; i < children.length; i++) {
    const newLi = document.createElement('li');
    const content = children[i].innerText;
    newLi.innerText = content;
    siteMap.append(newLi);
<<<<<<< HEAD
}



// **Bonus**
// After you completed the assignment and published the solution branch, 
// you can create a new branch `feature/restyle` and change the design of the landing-page. 
// You can publish it on GitHub Pages when you are satisfied with the result.
=======
}
>>>>>>> 98dc5440db84ac10902c5b49aceb6201320b1031
