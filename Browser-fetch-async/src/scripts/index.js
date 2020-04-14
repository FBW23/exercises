import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

async function asyncModalCall() {
    let promiseOfModal = new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(modal)
        }, (1000));
    });

 await promiseOfModal.then(function(val) {
        console.log("User has been on the page for 60 seconds");
        val.style.display = "block";
    })
    
}

asyncModalCall();

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

