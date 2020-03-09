let elem1 = document.querySelector('h1').closest('header');
elem1.style.border = "5px solid purple";


//   let elem13 = document.querySelector('package-title').closest('package-title');


// function isInPage(node) {
//   return (node === section.info) ? false : section.info.contains('.info-package');
// }
// const info=document.querySelector('.info');
const infoArray = document.querySelector(".info");
const packages = document.querySelector('.info-package');
const allPackageTitles = document.querySelectorAll(".package-title");
if (infoArray.contains(packages)) {
  allPackageTitles.forEach(item => {
    item.previousElementSibling.classList.add('imgBorder');
  })
};

const allLabels=document.querySelectorAll("label")
allLabels.forEach(label=>{
  if (label.matches(".mild")){
    label.classList.add('borderYellow');
  }else if(label.matches('.intense')) {
    label.classList.add('borderOrange');

  }else {
    label.classList.add('borderRed');}
})
const navList=document.querySelector('.nav-list');
const siteMap=document.querySelector('.site-map');
const children=navList.children;
for(let i=0;i<children.lenght;i++){
  const newLi=document.createElement('li');
  const content=children[i].innerText;
  newLi.innerText=content;
  siteMap.append(newLi);
}

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