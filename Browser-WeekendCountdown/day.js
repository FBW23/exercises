const p = document.querySelector("p");
const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
    let weekdays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let d = new Date();
    let day = d.getDay()-1;
    let num = 5 - day;
    let name = getName.value;
    p.textContent = `Hello ${name}. Today is ${weekdays[day]}. Only ${num} days left until weekend!`
});