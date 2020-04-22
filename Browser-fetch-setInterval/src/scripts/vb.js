// # Pomodoro Timer 

// **Instructions**:
// * Using the structure in `index.html`, create a Pomodoro Timer using `setInterval()`. 
// * The user must be able to set the countdown via the input field as well as by increasing and decreasing the value with `+` and `-` buttons. 
// * The user should be able to start the timer. 
// * The user should be able to reset the timer back to 0:0. 
// * The user should be able to pause and continue the timer. 

// **Notes**:
// * The timer should stop once it reaches 0. 
// * The user should be able to input any amount of time in minutes e.g. 1 minute, 1.5 minutes, 1.8 minutes.
// import '../styles/main.scss';
// import 'babel-polyfill';

const plus = document.querySelector("#btn-plus");
const start = document.querySelector("#btn-start");
const minus = document.querySelector("#btn-minus");
const reset = document.querySelector("#btn-reset");
const pause = document.querySelector("#btn-pause");
const continueBtn = document.querySelector("#btn-continue");
const timeInput = document.querySelector("#time");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");








const count = () => {
 
//BASIC SETUP
    secs.innerText = 60;
    mins.innerText = Number(timeInput.value) - 1;
    if (Number(timeInput.value) % 1 != 0) {
        secs.innerText = ((Number(timeInput.value) % 1) * 60).toFixed(0);
        (mins.innerText = Math.ceil(Number(timeInput.value)) - 1);
    }

    //TIMER

    let ticker = setInterval(function () {
        if (secs.innerText > 0) {
            secs.innerText -= 1;
        }
        if (secs.innerText == 0 && mins.innerText > 0) {
            secs.innerText = 60;
            mins.innerText -= 1;
        }


    }, 1000)

//PAUSE

 const pasueFunction = () => {
        clearInterval(ticker);
    };
    pause.addEventListener("click", pasueFunction);


//CONTINUE

const continueCounting = () => {
        ticker = setInterval(function () {

            if (secs.innerText > 0) {
                secs.innerText -= 1;
            }
            if (secs.innerText == 0 && mins.innerText > 0) {
                secs.innerText = 5;
                mins.innerText -= 1;
            }


        }, 1000)
    }

    continueBtn.addEventListener("click", continueCounting);


}



//INCREASE BUTTON
const plusFunction = () => {
    return timeInput.value++;
};


//DECREASE BUTTON
const minusFunction = () => {
    return timeInput.value--;
};


//RESET
const resetFunction = () => {
    secs.innerText = 0;
    mins.innerText = 0;
};



plus.addEventListener("click", plusFunction);
minus.addEventListener("click", minusFunction);
start.addEventListener("click", count);
reset.addEventListener("click", resetFunction);



