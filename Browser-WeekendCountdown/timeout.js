let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
const date= new Date();
const weekday = date.getDay();
days=days[weekday-1];
let input=document.querySelector("#text");
    let output=document.querySelector("h2");
let daysRemaining=5-weekday;
// const isWeekend = weekday === 'Sunday' || weekday === 'Saturday';
// if(weekday==='Monday'){
//     console.log('Its 4 days left until weekend');
// } else if(weekday==='Tuesday'){
//     console.log('Its 3 days left until weekend');
// } else if(weekday==='Wednesday'){
//     console.log('Its 3 days left until weekend');
// }else if(weekday==='Thursday'){
//     console.log('Its 2 days left until weekend');
// } else if (weekday==='Friday'){
//     console.log('Its 1 days left until weekend');
// } else{
//     console.log('its weekend!')
// }
// console.log(weekday)



function myFunction() {
    
  output.innerText = `Hello ${input.value},Today is ${days}.Only ${daysRemaining} day(s) till the weekend!` ;
}
document.querySelector("#button").addEventListener("click", myFunction);