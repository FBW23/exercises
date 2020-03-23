const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn2b = document.querySelector("#btn2b");
const btn3b = document.querySelector("#btn3b");
const submit = document.querySelector("#submit");
const rad1 = document.querySelector("#ph1");
const rad2 = document.querySelector("#ph2");
const rad3 = document.querySelector("#ph3");
const page1 = document.querySelector("#phase1");
const page2 = document.querySelector("#phase2");
const page3 = document.querySelector("#phase3");
const emailField = document.querySelector("#email")
const overview = document.querySelector(".overview");

function showPage1() {
    rad1.classList.add("active");
    rad2.classList.remove("active");
    rad3.classList.remove("active");

    page1.classList.add("visible");
    page2.classList.remove("visible");
    page3.classList.remove("visible");
}
rad1.addEventListener("click", showPage1);
btn2b.addEventListener("click", showPage1);

function showPage2() {
    rad1.classList.remove("active");
    rad2.classList.add("active");
    rad3.classList.remove("active");

    page1.classList.remove("visible");
    page2.classList.add("visible");
    page3.classList.remove("visible");
}
rad2.addEventListener("click", showPage2);
btn1.addEventListener("click", showPage2);
btn3b.addEventListener("click", showPage2);

function showPage3() {
    rad1.classList.remove("active");
    rad2.classList.remove("active");
    rad3.classList.add("active");

    page1.classList.remove("visible");
    page2.classList.remove("visible");
    page3.classList.add("visible");
}
rad3.addEventListener("click", showPage3);
btn2.addEventListener("click", showPage3);

function showData() {
    event.preventDefault();
    rad1.classList.add("active");
    rad2.classList.add("active");
    rad3.classList.add("active");
    page1.classList.add("visible");
    page2.classList.add("visible");
    page3.classList.add("visible");
    overview.classList.add("visible");

    let buttons = document.querySelectorAll(".navsys");
    for (const i of buttons) {
        i.classList.add("invis");
    }
    let headings = document.querySelectorAll(".pageTitle");
    for (const i of headings) {
        i.classList.add("invis");
    }
}
submit.addEventListener("click", showData);

fname.addEventListener('blur', function () {
    if (fname.value == "") {
        alert("Please enter your name!");
    }
});

emailField.addEventListener('blur', function () {
    isValidEmail = emailField.checkValidity();
    if (!isValidEmail) {
        alert("Please enter a valid email address!");
    }
});