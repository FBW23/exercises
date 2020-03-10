/*1. Create a mini app that takes in a users name and returns the following;

    - A greeting with the users name.
    - Current day
    - Days left till the weekend*/

const target = document.querySelector("#target");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text")
btn.addEventListener("click", () => {

    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let d = new Date();
    let day = d.getDay();
    let num = 5 - day;
    let name = text.value;
    console.log(day);

    target.innerText = `Hello ${name}, today is ${weekdays[day]}. Only ${num} days left until weekend!`
});
