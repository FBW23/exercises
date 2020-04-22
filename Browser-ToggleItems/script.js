const ulist = document.querySelector("#ulist")
const toggler = document.querySelector("#toggler");
toggler.addEventListener("click", () => {
    if(!ulist.classList.contains("hid")) {
            ulist.classList.add("hid");
    } else {
        ulist.classList.remove("hid");
    }
});