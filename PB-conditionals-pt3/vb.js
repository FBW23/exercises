// # Programming Basics: Conditionals Part 3 

// Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

// **Print your results to the console**

// 1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
console.log `(====================);`
console.log(`1. Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.`);

let a1 = 300;
let a2 = 300;
let a3 = 300;
let l1 = 300;
let l2 = 300;
let l3 = 300;




console.log `(====================);`
// - 1a) Calculate the average score for each team.
console.log `(====================);`
console.log(` - 1a) Calculate the average score for each team.`);


let aAverage = (a1 + a2 + a3) / 3;
console.log(`Aleeza's average: ${aAverage}`);
let lAverage = (l1 + l2 + l3) / 3;
console.log(`Lis' average: ${lAverage}`);


console.log `(====================);`
// - 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
console.log `(====================);`
console.log(`- 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.`);
if (aAverage > lAverage) {
    let winner = 'Azela';
    console.log(winner);
    console.log("");
} else {
    let winner = 'Lis';
    console.log(winner);
}





console.log `(====================);`
// - 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
console.log(`- 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).`);

{
    let a1 = 300;
    let a2 = 120;
    let a3 = 89;
    let l1 = 116;
    let l2 = 94;
    let l3 = 123;

    let aAverage = (a1 + a2 + a3) / 3;
    console.log(`Aleeza's average: ${aAverage}`);
    console.log("");
    let lAverage = (l1 + l2 + l3) / 3;
    console.log(`Lis' average: ${lAverage}`);

    if (aAverage > lAverage) {
        let winner = 'Azela';
        console.log(`The winner is: ${winner}!!`);
        console.log("");
    } else {
        let winner = 'Lis';
        console.log(`The winner is: ${winner}!!`);
    }

}





console.log `(====================);`
// - 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
console.log `(====================);`

console.log(`- 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.`)

let m1 = 300;
let m2 = 300;
let m3 = 300;


let mAverage = (m1 + m2 + m3) / 3;
console.log(`Mary's average: ${mAverage}`);

if ((aAverage > lAverage) && (aAverage > mAverage)) {
     winner = 'Azela';
    console.log(`The winner is: ${winner}!!`);
    console.log("");
} else if ((aAverage < lAverage) && (mAverage < lAverage)) {
    winner = 'Lis';
    console.log(`The winner is: ${winner}!!`);
} else if ((aAverage < mAverage) && (mAverage > lAverage)){
    let winner = 'Mary';
    console.log(`The winner is: ${winner}!!`);
}
    else{
         winner ='the result is a draw';
        console.log(winner);
    }




console.log `(====================);`
// - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.
// å

console.log `(====================);`

console.log(` - 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.`);

{








    let a1 = 300;
    let a2 = 300;
    let a3 = 300;
    let l1 = 300;
    let l2 = 300;
    let l3 = 300;
    let m1 = 300;
    let m2 = 300;
    let m3 = 300;

    let aAverage = (a1 + a2 + a3) / 3;
    console.log(`Aleeza's average: ${aAverage}`);
    console.log("");
    let lAverage = (l1 + l2 + l3) / 3;
    console.log(`Lis' average: ${lAverage}`);
    console.log("");
    let mAverage = (m1 + m2 + m3) / 3;
    console.log(`Mary's average: ${mAverage}`);

    if ((aAverage > lAverage) && (aAverage > mAverage)) {
        let winner = 'Azela';
        console.log(`The winner is: ${winner}!!`);
        console.log("");
    } else if ((aAverage < lAverage) && (mAverage < lAverage)) {
        let winner = 'Lis';
        console.log(`The winner is: ${winner}!!`);
    } else if ((aAverage < mAverage) && (mAverage > lAverage)){
        let winner = 'Mary';
        console.log(`The winner is: ${winner}!!`);
    }
        else{
            console.log('the result is a draw');
        }
    

}

console.log('switch');



    switch (winner) {
        case 'Azela':
            winner = 'Azela';
            
            console.log(`The winner is: ${winner}!!`);
            break;
        case 'Lis':
                
            winner = 'Lis';
            console.log(`The winner is: ${winner}!!`);
            break;
        case 'Mary':
            winner = 'Mary';
            console.log(`The winner is: ${winner}!!`);
            break;
            default: 
            console.log("It's a draw");

    }




console.log `(====================);`