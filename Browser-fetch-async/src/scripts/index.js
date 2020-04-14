import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
const btn = document.getElementById("continue");


function resolveModal() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
async function asyncCall() {
    const result = await resolveModal();
    console.log("User has been on the page for 60 seconds");
    modal.style.display = "block";
  }
asyncCall();

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