// # Weekend Countdown

// 1. Create a mini app that takes in a users name and returns the following;

//     - A greeting with the users name.
//- Current day
//     - Days left till the weekend

// 1.  **Optional:** Style to your pleasing & feel free to load/use bootstrap via CDN.

// > Hint: Refer to the representation below, for an idea of what your result should look like.

// ![demo](demo.gif)





const myFunction = (e) => {
    e.preventDefault();

    let input = document.querySelector("#input");
    let output = document.querySelector("label");
    let today = new Date().getDay();

    // let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // day = day[today - 1]
    let daysRemaining = 5 - today;
    day = new Date().toLocaleString('en-EN', {
        weekday: 'long'
    })
    if (daysRemaining < 1) {
        daysRemaining = 0;
    }
    if (input.value) {

        output.innerText = `Hello ${input.value}, Today is ${day}. Only  ${daysRemaining} days until Weekend!`;

    }

};

document.querySelector("button").addEventListener("click", myFunction)