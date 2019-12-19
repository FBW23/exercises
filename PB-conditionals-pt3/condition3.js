// Attempt this exercise using only simple "if" conditionals (and only what you have 
//learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, 
//Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.
// - 1b) Decide which teams wins in average (highest average score), and print the winner to 
//the console, including their average score in the output.
// - 1c) Then change the scores to show different winners. Don't forget to take into account 
//there might be a draw (the same average score).
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, 
//log the average winner to the console.
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let aleeza_1 = 89,
    aleza_2 = 120,
    aleza_3 = 103;
let lis_1 = 116,
    lis_2 = 94,
    lis_3 = 123;
let aleezaAverage = (aleeza_1 + aleza_2 + aleza_3) / 3;
console.log(`Aleeza average score: ${aleezaAverage}`);
let lisAverage = (lis_1 + lis_2 + lis_3) / 3;
console.log(`Lis Average score: ${lisAverage}`);
let marry_1 = 97,
    marry_2 = 134,
    marry_3 = 105;
let marryAverage = (marry_1 + marry_2 + marry_3) / 3;
console.log(marryAverage);
if (aleezaAverage > lisAverage && aleezaAverage > marryAverage) {
    console.log("Aleeza's average score was " + aleezaAverage);
} else if (lisAverage > aleezaAverage && lisAverage > marryAverage) {
    console.log("Lis's average score was " + lisAverage);
} else if (marryAverage > aleezaAverage && marryAverage > lisAverage) {
    console.log("Mary's average score was " + marryAverage);
} else {
    console.log("Everybody is the winner ");
}



