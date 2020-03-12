// # Carousel

// 1. Create a **Carousel** of up to 6 images.

// 1. Add arrows for navigation.

// 1. Write a function that handles each of the navigation behaviours.

// 1. **Optional:** Style to your pleasing.

// > Hint: Refer to the representation below, for an idea of what your result should look like.

// ![demo](demo.gif)



let leftArrow=document.querySelector("#leftArrow p");
let carousel=document.querySelector("#carousel");
let back=document.querySelector("body");
let button=document.querySelector("button");
let img1=document.querySelector("#img1");

const pictureLeft=()=>{
// carousel.getElementsByClassName.backgroundImage = "url(alpaca2.jpg)";
img1.getElementsByClassName.backgroundImage = "url(alpaca2.jpg)";

}
button.addEventListener("click", pictureLeft);