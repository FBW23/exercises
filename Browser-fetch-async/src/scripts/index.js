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


const subscribePromise = new Promise((resolve, reject) => {
    const button = document.querySelector('.btn');
    button.addEventListener('mouseout', function() {
        resolve(this.style.background = 'black') 
        
    })
})
 subscribePromise();
})