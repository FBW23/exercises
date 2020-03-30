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