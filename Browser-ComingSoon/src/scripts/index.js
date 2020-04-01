// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';

// Import any additional modules you want to include below \/
// import moment from 'moment';


// \/ All of your javascript should go here \/
//===================================


//===================================


let countDownDate = new Date("Aug 12, 2020 00:01:25").getTime();


let x = setInterval(function () {
    
    
    let now = new Date().getTime();

    
    let distance = countDownDate - now;
    console.log(Math.floor(distance / (1000 * 60 * 60 * 24)))
    
    let days = Math.floor(distance / (10000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    let countdownTemplate = 
    `
    <p id="days">${days} Days</p>
    <p id="hours">${hours} Hours</p>
    <p id="minutes">${minutes} Minutes</p>
    <p id="seconds">${seconds} Seconds</p>
    `;
    
    const sectionLeft = document.querySelector('.left');
    sectionLeft.innerHTML = countdownTemplate;
    
}, 1000);


