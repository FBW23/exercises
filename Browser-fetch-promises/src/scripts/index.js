// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/



const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");
const modalText=document.querySelector("#modalText")



const clockShort = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(modal.style.display = "block")
        }, 5000);
    });


    promise.then(spentIt => {
        spentIt;
        modalText.innerText="You've been on the site for 5 seconds! Cool!"
    })
};




const clockLong = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(modal.style.display = "block")
        }, 60000);
    });


    promise.then(spentIt => {
        spentIt;
    })
};

const closeModal = () => {
    modal.style.display = "none";
};
//document.addEventListener("DOMContentLoaded", clockLong);

close.addEventListener("click", closeModal);


const choice = () => {
    let userselection = confirm("If you have 60 seconds, press OK, if you have 5 seconds only, CANCEL!    ");
    if (userselection === true) {
        clockLong();
    } else {
        clockShort();
    }
}




// document.addEventListener("DOMContentLoaded", choice);
// document.addEventListener('DOMContentLoaded', function () {
//     const body = document.querySelector('body');
//     const modal = document.querySelector('.modal');
//     let promiseOfModal = new Promise(function (resolve, reject) {
//         window.setTimeout(function () {
//             resolve(modal, body); // give your references 
//         }, (2*1000)); // 60 seconds
//         // reject(body);
//     });
//     promiseOfModal.then(function() {
//         modal.style.display = "block";
//     });
//     promiseOfModal.then(function() {
//         body.style.background = "black";
//     });
//     promiseOfModal.catch(function(e) {
//         console.error(e);
//     });
//     const close = document.querySelector('.close');
//     close.addEventListener('click', function() {
//         modal.style.display = "none";
//     });
// });
