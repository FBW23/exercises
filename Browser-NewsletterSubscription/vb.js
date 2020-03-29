







// const pop = () => {

//     if (event.clientY < 10) {
//         document.querySelector("#popup").style.display = "flex";
//         document.querySelector("body").style.background = "grey";
//     }
// }


// document.addEventListener("mousemove", pop);


let closeIt = () => {
    if (event.keyCode === 27) {
        document.querySelector("#popup").style.display = 'none';
        document.querySelector("body").style.background = "none";
    }
}

document.addEventListener("keydown", closeIt);

let openIt = () => {
    if (event.keyCode === 13) {
        document.querySelector("#popup").style.display = 'flex';
        document.querySelector("body").style.background = "gray";
    }
}

document.addEventListener("keyup", openIt);

const form=document.querySelector("form");


const mySubmit=()=>{
    event.preventDefault();
    }


form.addEventListener("submit",mySubmit);

