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