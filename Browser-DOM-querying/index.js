//Change the font of the body element.

let body = document.body;

body.style.fontFamily = "mono";
body.style.lineHeight = "1.5";
body.style.letterSpacing = ".1rem";

//Center the text of h1 on the page.

let heading = document.querySelector("h1");
heading.style.textAlign = "center";

//The menu headings have a class named category. 
//Select the elements by class name. Then, change 
//the color and font-style of each element.

let menuHeadings = document.querySelectorAll(".category");
for (let i = 0; i < menuHeadings.length; i++) {
  menuHeadings[i].style.color = "red";
  menuHeadings[i].style.fontFamily = "serif";
  menuHeadings[i].style.fontSize = "2rem";
  menuHeadings[i].style.borderBottom = "2px solid black";
  menuHeadings[i].style.display = "block";
  menuHeadings[i].style.marginBottom = "1em"
}

/*
Create a function named "colorGenerator" that returns a 
different color. The returned random color should also 
include set transparency. Select the unordered lists with 
the class of food-category. Give each list a different 
background color using the function that you created.
*/

function randomRgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

let unorderedLists = document.querySelectorAll(".food-category");
console.log(unorderedLists)
for (let i = 0; i < unorderedLists.length; i++) {
  unorderedLists[i].style.backgroundColor = randomRgba();
  unorderedLists[i].style.padding = "2em";
  unorderedLists[i].style.width = "80%";
  unorderedLists[i].style.margin = "1em 0"
}

/*
Align the food-category lists in a row on 
desktop. Make sure that the
page is responsive and also works on mobile.
*/

let main = document.querySelector(".main");
let screenWidth = window.matchMedia("(max-width: 615px)")
main.style.display = "flex";
main.style.width = "100%";


function responsivePage() {
  if (screenWidth.matches) {
    main.style.flexDirection = "column";
    main.style.padding = "1em";
    main.style.alignItems = "center";
    footer.style.flexDirection = "column";
  } else {
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-around";
    for (let i = 0; i < unorderedLists.length; i++) {
      unorderedLists[i].style.margin = "1em";
    }
  }
}
responsivePage(screenWidth);
screenWidth.addListener(responsivePage);
/*
Select the warning at the end of 
the page by its id warning. Select 
the id without using a querySelector. 
Change the size and font of the warning.
*/

let warning = document.getElementById("warning");
warning.style.fontSize = "1.5rem";
warning.style.textAlign = "center";
warning.style.fontFamily = "serif";

/* 
Select all even allergy-info items. 
Give the even items a different background color.
Make the allergy-warning appear as a column in 
the center of the page.
*/


let evenAllergyInfo = document.querySelectorAll('.allergy-info');
for (let i = 0; i < evenAllergyInfo.length; i++) {
  evenAllergyInfo[i].style.textAlign = "left";
  evenAllergyInfo[i].style.listStyle = "none";
  evenAllergyInfo[i].style.display = "flex";
  evenAllergyInfo[i].style.justifyContent = "flex-start";
  evenAllergyInfo[i].style.width = "30%";
  evenAllergyInfo[i].style.margin = "0 auto";
}
for (let i = 0; i < evenAllergyInfo.length; i++) {
  evenAllergyInfo[++i].style.backgroundColor = "lightblue";

}

/*
The descriptions in the footer should also be styled, 
e.g. a rounded border with a background color. 
They should appear 
in a column for mobile and in a row for desktop.
*/
let footer = document.querySelector('.footer');
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.marginTop = "3em";
footer.style.alignItems = "center";


let footerDesc = document.querySelectorAll(".food-desc");
for (let i = 0; i < footerDesc.length; i++) {
  footerDesc[i].style.fontSize = "0.5em"
  footerDesc[i].style.border = "5px solid orange"
  footerDesc[i].style.padding = "5em";
  footerDesc[i].style.borderRadius = "50%"
  footerDesc[i].style.width = "5%";
  footerDesc[i].style.margin = "1em 1.5em";
  footerDesc[i].style.textAlign = "center";

}