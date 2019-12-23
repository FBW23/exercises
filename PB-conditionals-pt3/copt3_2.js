// ALL VARIABLES
let averageAleeza = (89 + 120 + 103) / 3;
let averageLis = (116 + 94 + 123) / 3;
let averageMary = (97 + 134 + 105) / 3;

let highestScore = 'the highest score is';
let equalScore = 'all scores are equal.'

console.log();
console.log("1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points. Calculate the average score for each team.");
console.log();
console.log("Aleeza's team average score is ->", averageAleeza + ".");
console.log("Lis' team average score is ->", averageLis + ":");
console.log();
console.log("Decide which team wins in average (highest average score), and print the winner to the console, including their average score in the output.");
console.log();
if (averageAleeza > averageLis) {
    console.log(highestScore, averageAleeza + ". Aleeza's team wins!");
} else {
    console.log(highestScore, averageLis + ". Lis' team has the highest score.");
}
console.log();
console.log("Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).");
console.log();
if (averageAleeza > averageLis) {
    console.log(highestScore, averageAleeza + ". Aleeza's team wins!");
} else if (averageAleeza === averageLis) {
    console.log("both scores are equal.")
} else {
    console.log(highestScore, averageLis + ". Lis' team has the highest score.");
}
console.log();
console.log("Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. Like before, change the scores to generate different winners, keeping in mind that there might be draws.");
console.log("Mary's team average score is ->", averageMary + ":");
console.log();
console.log("Mary's team scored ->", averageMary + ":");
if ((averageLis > averageMary) && (averageLis > averageAleeza)) {
    console.log(highestScore, averageMary + ". Lis' team wins!");
} else if ((averageAleeza > averageLis) && (averageAleeza > averageMary)) {
    console.log(highestScore, averageAleeza + ". Aleeza's team wins!");
} else if ((averageMary > averageAleeza) && (averageMary > averageLis)) {
    console.log(highestScore, averageMary + ". Mary's team wins!");
} else {
    console.log(equalScore);
}