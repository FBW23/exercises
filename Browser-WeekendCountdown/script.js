const target = document.querySelector("#target");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let day = d.getDay();
    let num = 5 - day;
    let name = text.value;
    console.log(day);
    
    target.innerText = `Hello ${name}. Today is ${weekdays[day]}. Only ${num} days left until weekend!`
});