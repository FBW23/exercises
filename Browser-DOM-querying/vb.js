// # Menu Styling 
// In the repository, there is an `index.html` starting file which has the skeleton of an online menu. Style the menu by following the instructions below. 

// **Rules**: 
// * All changes to the menu should be done in JavaScript! No CSS!!
// * The page should be responsive.

// **Instructions**: 
// * Change the font of the body element. 
const bodyFont = document.querySelector('body');
bodyFont.style.fontFamily='courier';
bodyFont.style.fontWeight=('bold');


// * Center the text of h1 on the page.

const h1=document.querySelector('h1');
h1.style.textAlign=('center');
// * The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 



const category=document.querySelectorAll(".category");
// category.style.color=('blue');
for(let i=0;i<category.length;i++){
    category[i].style.color=('blue');
}


// * Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 

const ul=document.querySelectorAll(".food-category");


colorGenerator=()=>{
    let r=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;
    let opacity=0.7;
     return (`rgba(${r},${g},${b})`)
   
}


for(let i=0;i<ul.length;i++){
    ul[i].style.color=(colorGenerator());
    // ul[i].style.opacity=('0.5')
    ul[0].style.backgroundColor=("black");
    ul[1].style.backgroundColor=("red");
    ul[2].style.backgroundColor=("yellow");
    ul[i].style.display=("inline-flex");
}
// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.


// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.

const warning=document.getElementById("warning");
warning.style.fontSize=("45px");
warning.style.fontFamily=("mono");
warning.style.color=("orange");
// * Select all _even_ `allergy-info` items. Give the even items a different background color.


const info=document.querySelectorAll(".allergy-info");
for(let i=0;i<info.length;i++){
    if(i%2===0){
        info[i].style.backgroundColor=("green");
    }
}
// * Make the `allergy-warning` appear as a column in the center of the page.

const allergies=document.querySelector("allergies");
warning.style.textAlign=("center")



// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

const footer=document.querySelectorAll(".food-desc");

for (let i = 0; i < footer.length; i++) {
footer[i].style.display=("flex");
footer[i].style.backgroundColor=("red");
footer[i].style.borderRadius=("25px");
footer[i].style.margin=("2em");
footer[i].style.padding=("1em")



}


// **Images**:

// ![alt text](./images/menu-mobile.png "Mobile Menu")

// ![alt text](./images/menu-desktop.png "Mobile Menu")

// **Notes**:
// * Follow the instructions to create a menu. You can add any additional styling. 
// * Deadline: 2hrs.
// * See reference images. 

