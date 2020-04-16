// # Fetch - Async Await

// **Instructions**:
// * Convert the promise that handles the modal popup in the `index.js` file to use `async await` syntax. 
// * In the `main.scss` there is an animation on the "Continue" button on the page. Create a promise which executes code upon the button's animation end. **You must use the `async await` syntax.** 
// * Upon the animation end, display an alert saying "Continue to subscribe", and change the background color of the button. 

// ![On animation end](images/animationend.png)




import "../styles/main.scss";
import "babel-polyfill"

//VARIABLES

const btn = document.querySelector("#continue");
const modal = document.querySelector(".modal");
const modalbackground = document.querySelector(".modal__content")
const close = document.querySelector(".close");
const body=document.querySelector("body");





//MODAL


async function showModal() {
    await window.setTimeout(function () {
        modal.style.display = "block"
    }, (1000));
}



async function background(){
 await showModal;

window.setTimeout(function () {
    modalbackground.style.background="blue";
 }, (2000));
body.style.background="red";
 
}
background()


document.addEventListener("DOMContentLoaded", showModal);



//BUTTON-THING DONE WITH PROMISES



// const buttonHover = () => {
//     const promiseOfButton = new Promise(function (resolve) {
//         window.setTimeout(function () {
//             resolve(btn)
//         }, (0));
//     });

//  promiseOfButton.then(function (btn) {
//         alert("Continue to Subscribe!")
//         btn.style.background = "#17A2B8";
//     })
// };
// btn.addEventListener("animationend", buttonHover)







//BUTTON-THING DONE WITH ASYNC



async function  buttonColor () {

await this
btn.style.background="#17A2B8";
};
btn.addEventListener("animationend", buttonColor);











// CLOSING THE MODAL
const closeIt = () => {
    modal.style.display = "none";
}
close.addEventListener("click", closeIt);