


let countDownDate = new Date("Jun 20, 2020 00:01:25").getTime();


let x = setInterval(function() {

  
  letnow = new Date().getTime();

 
  let distance = countDownDate - now;


  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
 let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
}, 1000);
