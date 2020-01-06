// #### 1. Color Analyzer

let myColor = 'black';

let expr = myColor;
switch (expr) {
    case 'red':
        console.log('Tomatoes');
        break;
    case 'blue':
        console.log('sky');
        break;
    case 'green':
        console.log('weed');
        break;
    case 'yellow':
        console.log('sunflower');
        break;
    default:
        console.log(expr + ' is not a defined color')
}

// #### 2. Grading

let myGrade = 2;

let expr1 = myGrade;
switch (expr1) {
    case 1:
        console.log('just a little vibration for beginners');
        break;
    case 3:
        console.log('You\'re starting to like it, right?');
        break;
    case 5:
        console.log('It\'s getting serious right now!');
        break;
    case 7:
        console.log('Look at you!');
        break;
    case 10:
        console.log('You\'re a professional!!');
        break;
    default:
        console.log('not an option, please chose another one')
}

// #### 3. Fruits

let myFruit = 'mango';
let expr2 = myFruit;
switch (expr2) {
    case 'banana':
        console.log('Banana bread');
        break;
    case 'orange':
            console.log('Orange juice');
            break;
    case 'strawberry':
            console.log('Strawberry milkshake');
            break;
    case 'apple':
            console.log('Apple pie');
            break;
    default:
            console.log('There\'s nothing about ' + expr2)
}

// #### 4. Percentage Complete. 


let myPercentage = 84;

if (myPercentage < 30) {
    console.log("Still a long way to go");
} else if ((myPercentage >= 30) && (myPercentage <= 50)) {
    console.log("Slowly getting there");
} else if ((myPercentage > 50) && (myPercentage < 80)) {
    console.log("You can do it!");
} else if  ((myPercentage > 80) && (myPercentage < 100)) {
    console.log("This is the last push!");
} else {
    console.log("You're there. Well done!")
}

// #### 5. Differences

// else if is for < and >, variable values
// switch is for =, fixed values