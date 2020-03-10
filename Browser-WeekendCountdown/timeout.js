let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
const date= new Date();
const weekday = date.getDay();

const isWeekend = weekday === 'Sunday' || weekday === 'Saturday';
if(weekday==='Monday'){
    console.log('Its 4 days left until weekend');
} else if(weekday==='Tuesday'){
    console.log('Its 3 days left until weekend');
} else if(weekday==='Wednesday'){
    console.log('Its 3 days left until weekend');
}else if(weekday==='Thursday'){
    console.log('Its 2 days left until weekend');
} else if (weekday==='Friday'){
    console.log('Its 1 days left until weekend');
} 
console.log(weekday)

document.getElementById("f-lft").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("").innerHTML = "Hello World";
}