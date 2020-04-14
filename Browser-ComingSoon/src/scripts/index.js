// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// Import any additional modules you want to include below \/

// import moment from 'moment';
// \/ All of your javascript should go here \/
const clock = document.querySelector("#clock");
const monthsDisplay = document.querySelector("#months");
const weeksDisplay = document.querySelector("#weeks");
const daysDisplay = document.querySelector("#days");
const hoursDisplay = document.querySelector("#hours");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

const dateInput=document.querySelector("#dateInput");






// const counter=()=>{
 





const endDate = new Date("Sep 25, 2020 15:37:25").getTime();


var x = setInterval(function () {

    let currentTime = new Date().getTime();
    let remainingTime = endDate - currentTime;

    // Time calculations for days, hours, minutes and seconds
    let months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7 * 4));
    let weeks = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);




    monthsDisplay.innerHTML = months;
    weeksDisplay.innerHTML = weeks;
    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;


}, 1000);

// }
// dateInput.addEventListener("change",counter)


















// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.css';
// Import any additional modules you want to include below \/

// import moment from 'moment';
// \/ All of your javascript should go here \/
const clock = document.querySelector("#clock");
const monthsDisplay = document.querySelector("#months");
const weeksDisplay = document.querySelector("#weeks");
const daysDisplay = document.querySelector("#days");
const hoursDisplay = document.querySelector("#hours");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dateInput=document.querySelector("#dateInput");

const counter = () => {
    // let value =dateInput.value.split("");
    // let year=""
    // let day=""
    // let month=""
    // for(let i=0;i<value.length;i++){
    //     if(i<=3){
    //     year+=value[i];
    //     }
    //     if((i>4)&&(i<=6)){
    //         day+=value[i];
    //     }
    //     if((i>7)&&(i<=10)){
    //         month+=value[i];
    //     }
    // }
    // const endDate = new Date(`${month} ${day}, ${year} 15:37:25`).getTime();
   // const endDate = new Date(value).getTime();
    const endDate = new Date(`Sep 25, 2020 15:37:25`).getTime();
    // const endDate = new Date(`${month.value} ${day.value}, ${year.value} 15:37:25`).getTime();
    var x = setInterval(function () {

        let currentTime = new Date().getTime();
        let remainingTime = endDate - currentTime;

        // Time calculations for days, hours, minutes and seconds
        let months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7 * 4));
        let weeks = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        monthsDisplay.innerHTML = months;
        weeksDisplay.innerHTML = weeks;
        daysDisplay.innerHTML = days;
        hoursDisplay.innerHTML = hours;
        minutesDisplay.innerHTML = minutes;
        secondsDisplay.innerHTML = seconds;
    }, 1000);

}
counter();
// deadline.addEventListener("change", counter);
// dateInput.addEventListener("change",get);