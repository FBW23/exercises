/* 
Select the header that is the closest to the 
first h1 heading. 
Give the header a solid border of 5px. 
*/

const h1 = document.querySelector("h1");

const header = h1.closest("header");

header.style.border = "5px solid"

/*
If the .info section contains an .info-package, 
select all package-titles and give the title's 
previous element a border. 
*/

const infoArray = document.querySelectorAll("section");

infoArray.forEach(item => {
  if(item.matches('.info-package') === true) {
    const allPackageTitles = document.querySelectorAll(".package-title");

    allPackageTitles.forEach(item => {
      item.previousElementSibling.classList.add('imgBorder');
    })
  } else {
    console.log('There is no .info-package')
  }
})

/*
Check if the label's class matches 
"mild". If so, give the label a yellow solid border. 
If the label's class matches "intense", give the 
label an orange solid border. If the class does not 
match either, give the label a red solid border. 
*/

const labels = document.querySelectorAll("label");
labels.forEach(item => {
  if(item.matches('.mild') === true) {
    item.classList.add("borderYellow")
  } else if(item.matches('.intense') === true) {
    item.classList.add("borderOrange")
  } else if (item.matches('.extreme') === true) {
    item.classList.add("borderRed")
  }
});

/*
Add all the children of the .nav-list to the 
footer's unordered list, .site-map. Note: 
the .nav-list should still contain its children. 
*/

const navList = document.querySelector(".nav-list");
console.log(navList);
const childrenOfTheList = navList.childNodes;

const footerList = document.querySelector(".site-map");


// footerList.appendChild(childrenOfTheList[1]);


// childrenOfTheList.forEach(item => {
//   footerList.appendChild(item);
// })
