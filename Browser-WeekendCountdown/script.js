const target = document.querySelector("#target");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let day = d.getDay();
    let num = 5 - day;
    let name = text.value;
    console.log(day);
    
    target.innerText = `Hello ${name}. Today is ${weekdays[day]}. Only ${num} days left until weekend!`
});