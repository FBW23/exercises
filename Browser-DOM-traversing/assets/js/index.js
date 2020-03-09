const h1 = document.querySelector("h1");
console.log(h1);
const header = h1.closest("header");
console.log(header);
header.classList.add("borderGray");

//If the .info section contains an .info-package, select all package-titles 
//and give the title's previous element a border. 
const info = document.querySelector(".info");
console.log(info);
const packageTitles = info.querySelectorAll(".package-title");
console.log(packageTitles);

packageTitles.forEach(packageTitle => {
    if (packageTitle.matches(".info-package")) {
        console.log(packageTitle)
        packageTitle.previousSibling().classList.add("imgBorder")
    }

});