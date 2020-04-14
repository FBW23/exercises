// # Fetch - Async Await

// **Instructions**:
// * Convert the promise that handles the modal popup in the `index.js` file to use `async await` syntax. 
// * In the `main.scss` there is an animation on the "Continue" button on the page. Create a promise which executes code upon the button's animation end. **You must use the `async await` syntax.** 
// * Upon the animation end, display an alert saying "Continue to subscribe", and change the background color of the button. 

// ![On animation end](images/animationend.png)




import "../styles/main.scss";
import "babel-polyfill"




const btn = document.querySelector("#continue");
const modal = document.getElementById("myModal");
const close = document.querySelector(".close");

let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (2000));

});

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

// modal.addEventListener("click", (e) => {
//     switch(e.target.className) {
//         case "close":
//         case "modal":
//         modal.style.display = "none"
//         break;
//     }
// })







async function showModal() {
    await promiseOfModal;
    modal.style.display = "block";
}
showModal()

document.addEventListener("DOMContentLoaded", promiseOfModal);











//BUTTONPROMISE


const buttonclick = () => {
const promiseOfButton = new Promise(function (resolve) {
    btn.addEventListener("animationend", buttonRelated)
    resolve()
    
})

async function buttonRelated() {
    await promiseOfButton;
    alert("Continue to Subscribe!")
    btn.style.background = "#17A2B8";
}


   
}



//     promiseOfButton.then(function (btn) {
//         alert("Continue to Subscribe!")
//         btn.style.background = "#17A2B8";
//     })

// };


// btn.addEventListener("animationend", buttonclick)
btn.addEventListener("click", buttonclick)





// CLOSING THE MODAL





const closeIt = () => {
    modal.style.display = "none";
}

close.addEventListener("click", closeIt);