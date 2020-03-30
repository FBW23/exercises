let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let img = document.querySelector("#images");



const previous = () => {
    
    if (img.style.backgroundImage = 'url(1.jpg)') {
        img.style.backgroundImage = 'url(2.jpg)';
    }
    else if (img.style.backgroundImage = 'url(/2.jpg)') {
        img.style.backgroundImage = 'url(/3.jpg)';
    }
    if (img.style.backgroundImage = 'url(/4.jpg)') {
        img.style.backgroundImage = 'url(/5.jpg)';
    }
    // if (img.style.backgroundImage = 'url(/5.jpg)') {
    //     img.style.backgroundImage = 'url(/6.jpg)';
    // }
}

prev.addEventListener("click", previous)