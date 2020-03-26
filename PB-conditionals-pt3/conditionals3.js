// Aleeza and Lis both play basketball in different teams. 
//In the latest 3 games, Aleeza's team scored 89, 120 and 103 points,


//while Lis's team scored 116, 94 and 123 points.

// 1a) Calculate the average score for each team.
let teamAleeza = (148 + 120 + 110) / 3; //104
let teamLis = (116 + 94 + 123) / 3; //111



// 1b) Decide which teams wins in average (highest average score), and print the winner to the console,
// including their average score in the output.
// 1c) Then change the scores to show different winners. 
//Don't forget to take into account there might be a draw (the same average score).
// if (teamAleeza > teamLis) {
//     console.log("Aleeza's team is the winner with " + teamAleeza + " points.");
// } else if (teamLis > teamAleeza) {
//     console.log("Lis's team is the winner with " + teamLis + " points.");
// } else  {
//     console.log("It's draw!")
// }


// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. 
//Like before, log the average winner to the console.
// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let teamMary = (97 + 134 + 105) / 3;

if ((teamAleeza > teamLis) && (teamAleeza > teamMary)) {
    console.log("Aleeza's team is the winner with " + teamAleeza + " points.");
} else if ((teamLis > teamAleeza) && (teamLis > teamMary)) {
    console.log("Lis's team is the winner with " + teamLis + " points.");
} else if ((teamMary > teamAleeza) && (teamMary > teamLis)) {
    console.log("Mary's team is the winner with " + teamMary + " points.");
} else {
    console.log("it's a draw");
}