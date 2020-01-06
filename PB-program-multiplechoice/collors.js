// # Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = 'grey';
let expr = color;
switch (expr) {
    case 'red':
        console.log('red');
        break;
    case 'blue':
        console.log('blue');

        break;
    case 'green':
        console.log('green');
        break;
    case 'yellow':
        console.log('yellow');
        break;    
    default:
        console.log('Invalid color' +  '.');
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = 10;

let expr2 = grade;
switch (expr2) {
    case 0:
        console.log('you have to study more!!');
        break;
    case 5:
        console.log('you are almost there!');

        break;
    case 10:
        console.log ('yes! You got it!');
        break;
    
    default:
        console.log('try it harder!' +  '.');
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).


let fruit = 'orange';

let expr3 = fruit;
switch (expr3) {
    case 'banana':
        console.log('if you don\'t like banana, mix it with strawberry!');
        break;
    case 'strawberry':
        console.log('it is too sour, put some condensed milk on it!!');

        break;
    case 'orange':
        console.log ('finally! let\'s make a juice :)');
        break;
    
    default:
        console.log('this fruit or whatever is a bad choice..' +  '.');
}


// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

let percentageComplete = 1000;

if (percentageComplete < 30){
    console.log('Still a long way to go');

}else if ((percentageComplete >= 30) && (percentageComplete <= 50)){
    console.log('Slowly getting there');
} else if((percentageComplete >=51 && percentageComplete <=80)){
    console.log('You can do it');
} else if ((percentageComplete >= 81) && (percentageComplete <= 99)){
    console.log('This is the last push');
} else if (percentageComplete === 100) {
    console.log('You\'re there. Well done!');
} else{
    console.log('this is an invalid value');
}

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

let answer = 'A switch case should be used when you have more conditions and cases, but if you have comparisons you should use \`if else` statement.';

console.log (answer);