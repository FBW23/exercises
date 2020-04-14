import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
function promiseOfModal() {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(modal)
        }, (1000 * 60));
    });
}
// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

async function asyncCall() {

    const result = await promiseOfModal();
    result.style.display = 'block';
}

asyncCall();


modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

//Animation
const button = document.querySelector('button')
function animateBtn() {
    return new Promise(resolve => {
        button.addEventListener('animationend', function (){
            resolve(button);
        });


    });
}

async function buttonAnimated() {
    const myButton = await animateBtn();
    myButton.style.background = "#FF0000";
    alert("Continue to Subscribe!");
}

buttonAnimated();







