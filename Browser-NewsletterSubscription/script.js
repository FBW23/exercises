const form = document.querySelector("#form");
document.querySelector("body").addEventListener("mouseenter", (event) => {
    while(event.clientY > 10) {form.classList.add('showit');}
})