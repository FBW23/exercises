// # Programming Basics: Conditionals Part 3 

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.
// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let scoreAleeza = (120 + 120 + 120) / 3; 
let scoreLis = (120 + 120 + 120) / 3; 
let scoreMary = (120 + 120 + 120) / 3; 
console.log(scoreAleeza);
console.log(scoreLis);
console.log(scoreMary);



if (scoreAleeza > scoreLis && scoreAleeza > scoreMary) {
    console.log("Aleeza's average score was " + scoreAleeza);
} else if (scoreLis > scoreAleeza && scoreLis > scoreMary) {
    console.log("Lis's average score was " + scoreLis);
} else if (scoreMary > scoreAleeza && scoreMary > scoreLis) {
    console.log("Mary's average score was " + scoreMary);
} else {
    console.log("Everybody is the winner ");

}

//Everybody is the winner 