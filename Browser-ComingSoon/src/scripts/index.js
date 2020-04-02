// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let countDownDate = new Date("Aug 30, 2020 00:01:25").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("counter").innerHTML = '</p>' + days + " days" + '</p>' + '</p>' + hours + " hours" + '</p>'
        + '<p>' + minutes + " minutes " + '</p>' + '<p>' + seconds + " seconds " + '</p>';
}, 1000);