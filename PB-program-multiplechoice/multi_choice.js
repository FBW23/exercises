console.log();
console.log('Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).');
let color = 'fucsia';
console.log('the color is', color, 'and...');
switch (color) {
    case 'red':
        console.log('red is the color of blood.');
        break;
    case 'blue':
        console.log('blue is the color of royal blood.');
        break;
    case 'green':
        console.log('green is the color of monsters\' blood in movies.');
        break;
    case 'yellow':
        console.log('yellow is the color of pus.');
        break;
    default:
        console.log('invalid values');
}

console.log();
console.log('Create a switch statement that prints different comments depending on a grade.');
console.log();
let grade = Math.round(Math.random()*3);
switch (grade) {
    case 1 :
        console.log('Congratulations, you earned a', grade+', the best score.');
        break;
    case 2 :
        console.log('Very well! You earned a', grade+'.');
        break;
    case 3 :
        console.log('Good. You scored a', grade+".");
        break;
    default :
        console.log('invalid values.');
}

console.log();
console.log('Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).');
console.log();
let fruit = 'orange';
switch (fruit) {
    case 'banana':
        console.log('Bananas grow on trees. Did you know that?');
        break;
    case 'orange':
        console.log('Orange is not only a fruit, it is also a color. Did you know that?');
        break;
    case 'strawberry':
        console.log('Strawberry fields... forever.');
        break;
    case 'apple':
        console.log('Apple is not only a fruit, it is also a famous brand. Did you know that?');
        break;
    default:
        console.log('invalid values.');
}

console.log();
console.log('Percentage Complete 0 to 100%');
console.log();
let percentageValue = Math.round(Math.random()*100);
// let percentageValue = -3; 
if ((percentageValue < 30) && (percentageValue >= 0)) {
    console.log("Still a long way to go! Your score is", percentageValue+".");
} else if ((percentageValue >= 30) && (percentageValue <= 50)) {
    console.log("Slowly getting there! Your score is", percentageValue+".");
} else if ((percentageValue >= 51) && (percentageValue <= 80)) {
    console.log("You can do it! Your score is", percentageValue+".");
} else if ((percentageValue >= 81) && (percentageValue <= 99)) {
    console.log("This is the last push! Your score is", percentageValue+".");
} else if (percentageValue === 100) {
    console.log("You're there. Well done! Your score is", percentageValue+".");
} else {
    console.log("invalid values. Your score is", percentageValue+".");
}

// 