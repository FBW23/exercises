
function fuzzBuzz() {
    var fuzz = document.getElementById("result");
    var number = Math.floor(Math.random() * 50) + 1;
    var three = "Fuzz";
    var five = "Buzz";
    if (number % 3 === 0 && number % 5 === 0) {
        fuzz.innerHTML = (number+" "+three+five);
        // document.getElementById("buzzMe").style.backgroundColor = green;
    } else if (number % 3 === 0) {

        fuzz.innerHTML = (number+" "+three);
        // document.getElementById("buzzMe").style.backgroundColor = red;
    } else if (number % 5 === 0) {
        fuzz.innerHTML = (number+" "+five);
    } else {
        fuzz.innerHTML = number;
        // document.getElementById("buzzMe").style.backgroundColor = blue;
 
    }
}
