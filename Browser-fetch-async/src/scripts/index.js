import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
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