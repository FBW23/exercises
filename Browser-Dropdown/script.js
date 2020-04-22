<<<<<<< HEAD
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const list5 = document.querySelector("#list5");

document.querySelector("#btn1").addEventListener("click", () => {
    list1.classList.toggle("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn2").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.toggle("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn3").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.toggle("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn4").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.toggle("show");
    list5.classList.remove("show");
});

document.querySelector("#btn5").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.toggle("show");
});


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let lists = document.querySelectorAll(".dropdown-list");
        for (let index = 0; index < lists.length; index++) {
            let element = lists[index];
            element.classList.remove('show');
        }
    }
}
=======
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const list5 = document.querySelector("#list5");

document.querySelector("#btn1").addEventListener("click", () => {
    list1.classList.toggle("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn2").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.toggle("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn3").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.toggle("show");
    list4.classList.remove("show");
    list5.classList.remove("show");
});

document.querySelector("#btn4").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.toggle("show");
    list5.classList.remove("show");
});

document.querySelector("#btn5").addEventListener("click", () => {
    list1.classList.remove("show");
    list2.classList.remove("show");
    list3.classList.remove("show");
    list4.classList.remove("show");
    list5.classList.toggle("show");
});


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let lists = document.querySelectorAll(".dropdown-list");
        for (let index = 0; index < lists.length; index++) {
            let element = lists[index];
            element.classList.remove('show');
        }
    }
} 
>>>>>>> cd6dd974dc9de61b5ceb0b2a5722b6e943b4cbba
