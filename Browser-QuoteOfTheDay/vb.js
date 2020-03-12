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



 const button = document.querySelector("#button");
 const text = document.querySelector("#text");


const swap = () => {
    let min = 0;
    console.log(min)
    let max = quotes.length

    console.log(max)
    let random = Math.floor(Math.random() * (max - min)) + min;
    console.log(random)
    text.value = quotes[random];
};

swap()

 button.addEventListener("click",swap);