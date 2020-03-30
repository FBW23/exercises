console.log(`1. Color Analyzer
Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).`);
console.log(`=============================`);
const color = 'yellow';
console.log(`the color is: ${color}`);
switch (color) {

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
}




console.log(`=============================`);
console.log(``);
console.log(``);
console.log(``);
console.log(`#### 2. Grading
    Create a switch statement that prints different comments depending on a grade.`);
console.log(`=============================`);

const grade = 1;
console.log(`the grade is: ${grade}`);
switch (grade) {

    case 1:
        console.log('You failed!');
        break;
    case 2:
        console.log('You could have failed!!');
        break;
    case 3:
        console.log('You will work as a barista');
        break;
    case 4:
        console.log('You will manage baristas');
        break;
    case 5:
        console.log('Excellent!');
        break;
    default:
        console.log('If you think there are more than 5 grades, you should have failed!');

}



console.log(`=============================`);
console.log(``);
console.log(``);
console.log(``);
console.log(` #### 3. Fruits
Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).`);

console.log(`=============================`);

const fruit = 'banana';
console.log(`the fruit is: ${fruit}`);
switch (fruit) {

    case 'orange':
        console.log('orange');
        break;
    case 'strawberry':
        console.log('strawberry');
        break;
    case 'apple':
        console.log('apple');
        break;
    case 'banana':
        console.log('banana');
        break;

    default:
        console.log('Is that a fruit?!')

}



console.log(`=============================`);
console.log(``);
console.log(``);
console.log(``);
console.log(` #### 4. Percentage Complete. 
* If percentageComplete is below 30, print "Still a long way to go". 
* If the percentageComplete is between 30 and 50, print "Slowly getting there". 
* If percentageComplete is between 51 and 80, print "You can do it!". 
* If percentageComplete is between 81 and 99, print "This is the last push!".
* If percentageComplete is 100, print "You're there. Well done!". `);
console.log(`=============================`);

let percentageComplete=100;
console.log(`the percentage is: ${percentageComplete}`);

if && (percentageComplete >= 0))(percentageComplete < 30) {
    console.log('Still a long way to go.');
} else if ((percentageComplete >= 30) && (percentageComplete <= 50)) {
    console.log('Slowly getting there');
} else if ((percentageComplete >= 51) && (percentageComplete <= 80)) {
    console.log('You can do it!');
} else if ((percentageComplete >= 81) && (percentageComplete <= 99)) {
    console.log('This is the last push!');
} else if (percentageComplete ===100) {
    console.log('You are there. Well done!');
}else{
    console.log(`error`);
}




    console.log(`=============================`);
    console.log(``);
    console.log(``);
    console.log(``);
   console.log(`#### 5. Differences
* When should you use a switch statement versus an if else statement. Comment your answer in your js file.`);
    console.log(`=============================`);

   console.log(`If should be used when we need to make a logical decision, or comparison, and the result, or action depends on the outcome of that comparison.`)

