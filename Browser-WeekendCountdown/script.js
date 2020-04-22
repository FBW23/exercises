const target = document.querySelector("#target");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = new Date().getDay();
    let num = 5 - day;
    let name = text.value;

    if(day < 5) {
        target.innerText = `Hello ${name}. Today is ${weekdays[day]}. Only ${num} days left until weekend!`;
    } else {
        target.innerText = `Hello ${name}. It is already the weekend!`;
    }
});