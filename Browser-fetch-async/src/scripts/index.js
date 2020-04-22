<<<<<<< HEAD
import "../styles/main.scss";
import "babel-polyfill"


window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("myModal");

    async function asyncModalCall() {
        let promiseOfModal = new Promise(function (resolve) {
            window.setTimeout(function () {
                resolve(modal)
            }, (1000 * 60));
        });

        await promiseOfModal.then(function (val) {
            console.log("User has been on the page for 60 seconds");
            val.style.display = "block";
        })

    }

    asyncModalCall();

    modal.addEventListener("click", (e) => {
        switch (e.target.className) {
            case "close":
            case "modal":
                modal.style.display = "none"
                break;
        }
    })



    async function asyncSubscribe() {
        let promiseSubs = new Promise(function (resolve, reject) {
            button.addEventListener('animationend', function () {
                resolve(button);
            });

            await promiseSubs.then(function (button) {

                alert('Subscribe now');
                button.style.backgroundColor = 'black';

            });
        });

        
    }
    asyncSubscribe();

});
=======
const btn = document.querySelector("#continue");
const modal = document.getElementById("myModal");
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
