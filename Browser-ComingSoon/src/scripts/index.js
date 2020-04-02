// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

var countDate = new Date("Jan 01, 2021 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = countDate - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  if(days <=9) {
    days = "0" + days;
  }
  var hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  if(hours <=9) {
    hours = "0" + hours;
  }
  var minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
  if(minutes <=9) {
    minutes = "0" + minutes;
  }
  var seconds = Math.floor(t % (1000 * 60) / 1000);
  if(seconds <=9) {
    seconds = "0" + seconds;
  }
  
  document.getElementById('timer').innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "min" + " " + seconds + "sec";
}, 1000);