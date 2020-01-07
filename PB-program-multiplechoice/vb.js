let color = "green";

switch (color) {
    case "yellow":
        console.log("yellow color");
        break;
    case "red":
        console.log("red color");
        break;
    case "blue":
        console.log("blue color");
        break;
    case "green":
        console.log("green color");
        break;
    case "black":
        console.log("black color");
        break;
    default:
        console.log("no color specified");
}


// This switch statement converted into a series of if / else statements would look like this:

// let color = "green";

// if (color == "yellow") {
//     console.log("yellow color");
// } else if (color == "red") {
//     console.log("red color");
// } else if (color == "blue") {
//     console.log("blue color");
// } else if (color == "green") {
//     console.log("green color");
// } else if (color == "black") {
//     console.log("black color");
// } else {
//     alert("no color specified");
// }


// It is not always clear when one should use an if/else if statement construct versus a switch statement. The general rule is that if the code requires a many chained series of if/else if statements, then it is more efficient to use a switch statement to eliminate redundant code.