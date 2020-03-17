const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "Well done is better than well said.",
    "You miss 100% of the shots you don’t take.",
    "A goal is a dream with a deadline.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Fall down seven times and stand up eight.",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "We cannot solve our problems with the same thinking we used when we created them."
];
//1. Create a loop for array
//2.create a function that take randomly a number from array


function changeText() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];     
    let input = document.getElementById("quote");
    input.innerHTML = `" ${randomQuote} "`;
}

changeText();

function changeButtonText() {
    let resetButton = (document.getElementById("resetButton").innerHTML =
        "Reload New Quote");
    // let icon = document.getElementById("icon");
    // icon.style.display = "block";
}
// change the text in Button
resetButton.addEventListener("click", changeButtonText);
// change the Quote
let newQuote = document.getElementById("resetButton");
newQuote.addEventListener("click", changeText);