// Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = 'red';

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
        break;
    default:
        console.log('invalid Value');
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = 'A';

switch (grade) {
    case 'A':
        console.log('PERFECT SCORE');
        break;
    case 'B':
        console.log('NOT BAD');
        break;
    case 'C':
        console.log('AHHHHHH NEARLY!');
        break;
    case 'D':
        console.log('DUMB ASSSSS!');
        break;
    default:
        console.log('invalid Value');
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruit = 'banana';

switch (fruit) {
    case 'banana':
        console.log('banana');
        break;
    case 'orange':
        console.log('orange');
        break;
    case 'strawberry':
        console.log('strawberry');
        break;
    case 'apple':
        console.log('apple');
        break;
    default:
        console.log('invalid Value');
}

// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

let percentage = 21;

switch (percentage) {
    case (0 < 29):
        console.log('Still a long way to go');
        break;
    case (30 >= 50 && 30 < 50):
        console.log('Slowly getting there');
        break;
        case (51 >= 80 && 51 < 80):
                console.log('You can do it!');
                break;
    case (81 >= 99 && 81 < 99):
        console.log('This is the last push!');
        break;
    case (val = 100):
        console.log('Well Done');
        break;
    default:
        console.log('invalid Value');
}

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.