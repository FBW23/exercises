// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// - 1a) Calculate the average score for each team.
// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let Aleeza = 89,
Aleeza2 = 120,
Aleeza3 = 103;
let Lis = 116,
lis2 = 94,
lis3 = 123;
let Mary = 97,
Mary2 = 134,
Mary3 = 105;

let MaryAverage = (Mary + Mary2 + Mary3) / 3;
console.log(MaryAverage);


let AleezaAverage = (Aleeza + Aleeza2 + Aleeza3) / 3;
console.log(AleezaAverage);

let LisAverage = (Lis + lis2 + lis3) / 1;
console.log(LisAverage);

if (AleezaAverage > MaryAverage && AleezaAverage >LisAverage) {
    console.log("Aleeza is the winner");
}     
    else if (LisAverage > MaryAverage) {
        console.log("Lis is the winner");
    }

    else if (MaryAverage > LisAverage ) {
        console.log("Mary is the winner");
    }
    else{
        console.log("Everybody is a winner")
    }


    
