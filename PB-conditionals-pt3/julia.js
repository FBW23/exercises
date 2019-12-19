// # Programming Basics: Conditionals Part 3 

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.
let averageAleezasteam = (89+120+103)/3;
console.log(averageAleezasteam);

let averageListeam = (116+94+123)/3;
console.log(averageListeam);

let averageMarysteam = (97+0+105)/3;

// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if (averageAleezasteam > averageListeam){
    console.log('Aleeza team');
}else{
    console.log('Lis team');
}
// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
if ((averageAleezasteam > averageListeam) && (averageAleezasteam > averageMarysteam)){
    console.log('Aleeza team');
} else if ((averageListeam > averageAleezasteam) && (averageListeam > averageMarysteam)){
    console.log('Lis team');
} else {
    console.log('Marys team');
}
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
