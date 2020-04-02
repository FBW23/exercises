// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
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




document.addEventListener("DOMContentLoaded", choice);