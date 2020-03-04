let body = document.body
body.style.fontFamily = "helvetica"

let h1 = document.querySelector("h1")
h1.style.textAlign = "center"

let category = document.querySelectorAll(".category")
for (let i = 0; i < category.length; i++) {
    category[i].style.color = "black"
    category[i].style.fontStyle = "oblique"
}

//Create a function named "colorGenerator" that returns a different color. 
//The returned random color should also include set transparency. 
//Select the unordered lists with the class of food-category. 
//Give each list a different background color using the function that you created.

let foodCategory = document.querySelectorAll(".food-category")

function colorGenerator() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 80%, 0.7)';
}

//Align the food-category lists in a row on desktop. 

let main = document.querySelector(".main")
main.style.display = "flex"
main.style.justifyContent = "space-between"



for (let j = 0; j < foodCategory.length; j++) {
    foodCategory[j].style.background = colorGenerator()
    foodCategory[j].style.width = "30%"
    foodCategory[j].style.height = "100px"
    foodCategory[j].style.paddingTop = "25px"

}

//Select the warning at the end of the page by its id warning. 
//Select the id without using a querySelector. 
//Change the size and font of the warning.

let warning = document.getElementById("warning")

warning.style.fontSize = "30px"
warning.style.textAlign = "center"
