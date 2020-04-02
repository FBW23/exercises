// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector("#myModal");
const close = document.querySelector(".close");

const clock = () => {
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

document.addEventListener("DOMContentLoaded", clock);

close.addEventListener("click", closeModal)