<<<<<<< HEAD
<<<<<<< HEAD

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
=======
/*Let's play mini FizzBuzz! For any given number, if the number is:
=======
let myNumber = 5;
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a

if (!(myNumber % 3) && !(myNumber % 5)){
    console.log('FizzBuzz');
} else if (!(myNumber % 5)){
    console.log('Buzz');
}else if (!(myNumber % 3)){
    console.log('Fizz')
}else{
    console.log(myNumber);
}
<<<<<<< HEAD
console.log(myString);
>>>>>>> 341a97d86489516bdc9df9debb71451baaa1765d
=======
>>>>>>> 67b86d63b5a7f483c338539ddf25515be07ae52a
