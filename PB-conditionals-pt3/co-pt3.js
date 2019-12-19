console.log();
console.log("Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points. \n \n 1a) Calculate the average score for each team.");
console.log();
let averageAleeza = (89 + 120 + 103) / 3;
let averageLis = (116 + 94 + 123) / 3;
let averageMary = (97 + 134 + 105) / 3;
let winnerPhrase = "The highest and winning average score is";
console.log("Aleeza's team average score is:", averageAleeza + ".",
    "\n\nLis' team average score is:", averageLis + ".", "\n\nMary's team average score is:", averageMary + ".");

console.log();
console.log("1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.");
console.log();

if (averageAleeza > averageLis) {
    console.log(winnerPhrase, "Aleeza's:", averageAleeza);
} else {
    console.log(winnerPhrase, "Lis':", averageLis);
}

console.log();
console.log("1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).");
console.log();

let newAverageAleeza = (234 + 643 + 923) / 3;
let newAverageLis = (42 + 423 + 767) / 3;

if (newAverageAleeza > newAverageLis) {
    console.log(winnerPhrase, "Aleeza's:", newAverageAleeza.toFixed(1));
} else {
    console.log(winnerPhrase, "Lis':", newAverageLis.toFixed(1));
}

console.log();
console.log("1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.");
console.log();
if (averageMary > averageAleeza && averageMary > averageLis) {
    console.log(winnerPhrase, "Mary's:", averageMary);
} else if (averageLis > averageAleeza && averageLis > averageMary) {
    console.log(winnerPhrase, "Lis':", averageLis);
} else if (averageAleeza > averageLis && averageAleeza > averageMary) {
    console.log(winnerPhrase, "Aleeza's:", averageAleeza);
}

console.log();
console.log("1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.");
