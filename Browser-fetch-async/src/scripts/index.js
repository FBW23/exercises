import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (100 * 20));
});

promiseOfModal.then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
})

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


promiseOfModal.then(function(val) {
}); 

const btnMsg = "Continue to subscribe"

btn.addEventListener("mouseout", (e) => {
    function resolveMsg() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 200);
        });
      }
      async function asyncCall() {
        const result = await resolveMsg();
        console.log("Change button text");
        btn.textContent = btnMsg;
      }
      asyncCall();
})

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})
