//Change the font of the body element.

let body = document.body;

body.style.fontFamily = "mono";

//Center the text of h1 on the page.

let heading = document.querySelector("h1");
heading.style.textAlign = "center";

//The menu headings have a class named category. 
//Select the elements by class name. Then, change 
//the color and font-style of each element.

let menuHeadings = document.querySelectorAll(".category");
for(let i =0; i < menuHeadings.length; i++) {
  menuHeadings[i].style.color = "red";
  menuHeadings[i].style.fontFamily = "serif";
}

/*
Create a function named "colorGenerator" that returns a 
different color. The returned random color should also 
include set transparency. Select the unordered lists with 
the class of food-category. Give each list a different 
background color using the function that you created.
*/

function randomRgba() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let unorderedLists = document.querySelectorAll(".food-category");
console.log(unorderedLists)
for(let i = 0; i < unorderedLists.length; i++) {
  unorderedLists[i].style.color = randomRgba();
}

/*
Align the food-category lists in a row on 
desktop. Make sure that the
page is responsive and also works on mobile.
*/

let main = document.querySelector(".main");

main.style.display = "flex";
main.style.justifyContent = "space-between";

/*
Select the warning at the end of 
the page by its id warning. Select 
the id without using a querySelector. 
Change the size and font of the warning.
*/

