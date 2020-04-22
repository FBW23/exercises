const btn = document.querySelector("#continue");
const modal = document.getElementById("myModal");
<<<<<<< HEAD
function promiseOfModal () {
    return new Promise(resolve =>{
    window.setTimeout(()=> {
        resolve(modal)
    }, (1000 *5));
});
}

async function asyncCall() {
  const await1=  await promiseOfModal();
    await1.style.display = 'block';
}
asyncCall();
modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})
//Animation
const button = document.querySelector('button')
function animateBtn () {
    return new Promise(resolve =>{
   button.addEventListener("animationend",function() {
        resolve(button)
    });
});
}
async function buttonAnimated () {
   const await2= await animateBtn();
    await2.style.background="purple";
}
button.addEventListener('mouseover', buttonAnimated());
=======
const closeBtn = document.querySelector(".close");
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
showModal();

document.addEventListener("DOMContentLoaded", promiseOfModal);

const buttonclick = () => {
    const promiseOfButton = new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(btn)
        }, (0));
    });
    promiseOfButton.then(function (btn) {
        alert("Continue to Subscribe!")
        btn.style.background = "#17A2B8";
    })
};
btn.addEventListener("animationend", buttonclick)
// CLOSING THE MODAL
const closeIt = () => {
    modal.style.display = "none";
}
closeBtn.addEventListener("click", closeIt);
>>>>>>> 9ba87cb0a9fca9a168a5bae0239513b32156a335
