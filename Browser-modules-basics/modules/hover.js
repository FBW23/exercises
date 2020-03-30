<<<<<<< HEAD
const modal = document.getElementById("myModal");
function hoverHeader () {
    const header = document.querySelector(".header");
    
    
    header.addEventListener("mouseover", e => {
        modal.style.display = "block"
    });

   

        // modal.addEventListener("click", (span) => {
        //     switch(e.target.className) {
        //         case "close":
        //         case "modal":
        //         modal.style.display = "none"
        //         break;
        //     }
        // })
}

function closeModal () {
    const span = document.querySelector('.span');
    span.addEventListener("click", e => {
        modal.style.display = "none"
    });
    
}

export {hoverHeader};
export{closeModal}
=======
function hoverHeader() {
    const header = document.querySelector(".header");
    const modal = document.getElementById("myModal");

    header.addEventListener("mouseenter", e => {
        console.log('show');
        modal.style.display = "block";
    });
    modal.addEventListener("click", (e) => {
        event.stopPropagation();
        console.log('hide');
        switch (e.target.className) {
            case "close":
            case "modal":
                modal.style.display = "none";
                break;
        }
    });

}
export {
    hoverHeader
};
>>>>>>> cd6dd974dc9de61b5ceb0b2a5722b6e943b4cbba
