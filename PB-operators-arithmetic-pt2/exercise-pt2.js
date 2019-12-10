console.log("");
let abendKasse = 6450;
let ticketKosten = 15;
console.log("Q1. How many tickets were sold?");
console.log(abendKasse / ticketKosten);
let sylviasIncome = 500;
console.log("");
console.log("Q2. How much does Sylvia make every year?")
console.log(sylviasIncome * 52);
console.log("");
console.log("Q3. Percentage of 17/30?");
let percentage = 17 / 30;
console.log(percentage * 100, "%");
console.log("");
console.log("Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.");
console.log(4.75 * 4);
console.log("");
console.log("Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.");
console.log(5 + 6 + 7);
console.log("");
console.log("Q6. Calculate the area of a square. Each side is 5cm.");
console.log(5 * 5);
console.log("");
// TRI_FUCKING_ANGLE
console.log("Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.");
console.log("");
console.log("Q8. Calculate the volume of a cube. Length of each side is 9cm.");
console.log(9 * 9 * 9);
console.log("");
console.log("Q9. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip");
let firstTip = (22.35 * 0.10);
let secondTip = (26.67 * 0.15);
let thirdTip = 35.92 * 0.20;
console.log("");
console.log("first bill with tip is", 22.35 + firstTip);
console.log("second bill with tip is", 26.67 + secondTip);
console.log("first bill with tip is", 35.92 + thirdTip);
console.log("");
console.log("Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?");
let workTime = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4);
console.log(workTime / 10);
console.log("");
console.log("Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?");
let sixAvesum = (85 * 6);
let allSum = (75 + 70 + 85 + 90 + 100);
let fiveAvesum = (sixAvesum - allSum);
console.log("Expected output:", fiveAvesum);
console.log("");
console.log("Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: James needs a minimum of --% to get an 80% average.");
let nineAssessments = (80 * 9);
let eightAssessment = (78 * 8);
let minAverage = (nineAssessments - eightAssessment);
console.log('James needs a minimum of', minAverage, '%', "to get an 80 % average.")
console.log("");

// LIVE CODING OTHER EXERCISE

let x = 20;
let y = 30;
console.log(x===y); // third is for type equlity check // FALSE
console.log(x!==y); // TRUE

