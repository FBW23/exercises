<<<<<<< HEAD
//Q1 
let mainCost = 6450;
let cost = 15;
let number = mainCost/cost;
console.log(number);
// 430 tickets are sold
//
//Q2 
let weekly = 500;
let numberOfWeeks = 52;
let yearly = weekly*numberOfWeeks;
console.log(yearly);
//26000 she makes per year 
//
//Q3
let part=17;
let whole=30;
let value=(part*100/whole);
let fValue = Math.round(value)+'%';
console.log(fValue);
//56% is how much the 17 out of 30;
//
//Q4
let side = 4.75
let perimeter = side*4;
console.log(perimeter);
//19 cm
//
//Q5
let side1= 7;
let side2= 6;
let side3= 5;
let perimeter2= side1+side2+side3;
console.log(perimeter2);
//perimeter 18cm
//
//Q6
let squareSide=5;
// let squareArea= squareSide*squareSide;
let squareArea=Math.pow(squareSide, 2);
console.log(squareArea);
//the square Area is 25cm^2
//
//Q7
let l1 , l2, l3;
l1=5;
l2=6;
l3=7;
let halfPerimeter=(l1+l2+l3)/2;
//since triangleArea=squareRoot{halfPerimeter(halfPerimeter-l1)(halfPerimeter-l2)(halfPerimeter-l3)}
let triangleArea = Math.sqrt(halfPerimeter*(halfPerimeter-l1)*(halfPerimeter-l2)*(halfPerimeter-l3));
console.log(triangleArea);
//Ara of the triangle is 14.6969cm^2
//
//Q8
let cubeSide=9;
// let cubeVolume=cubeSide*cubeSide*cubeSide;
let cubeVolume=Math.pow(cubeSide, 3);
console.log(cubeVolume);
//Volume of the Cube is 729cm^3
//
//Q9
let bill1, bill2, bill3 , tip1, tip2, tip3, sum1 , sum2 , sum3;

bill1=22.35;
bill2=26.67;
bill3=35.92;
tip1=(bill1*10)/100;
tip2=(bill2*15)/100;
tip3=(bill3*20)/100;
sum1=bill1+tip1;
sum2=bill2+tip2;
sum3=bill3+tip3;
console.log(sum1);
console.log(sum2);
console.log(sum3);
// first bill including tip = 24.59 euro
// second bill including tip = 30.67 euro
// third bill including tip = 43.10 euro
//
//Q10
let sum =  8+ 6+ 5+ 9+ 8+ 2+ 1+ 8.5+ 7+ 4;
let numberOfWorkingDays = 10;
let arithmeticalAverage = sum/numberOfWorkingDays;
console.log(arithmeticalAverage);
// Noemy is a LAZY person and her-his daily average work hours are 5.85 hours
//
//Q11
let average , subSum , sixth , numberOfTests;
average=85;
subSum=420;
numberOfTests=6;
sixth=(numberOfTests*average)-subSum+'%';
console.log('Score in the sixth test:' +sixth);
// he scored 90 in his last test
//
//Q12
let previousAverage,finalAverage,finalTestAverage;

 previousAverage=78;
 finalAverage=80;
//Since  finalAverage=(previousAverage+finalTestAverage)/2;
 finalTestAverage=(finalAverage*2)-previousAverage+'%';
 console.log('James needs a minimum of '+finalTestAverage+' to get an 80% average');
//he needs to get at least 82% in the final test 




=======
//Math Problems

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many people purchased a ticket? 
const ticketsSold = 6450;
const price = 15;
const numberPeople = ticketsSold / price;
console.log(`${numberPeople} bought tickets`);

//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500;
const yearlySalary = 500 * 52;
console.log(`Sylvia earns $${yearlySalary} per year`);

//Q3. Calculate the percentage of 17/30. Expected output: number%
const calcPercent = (17 * 100) / 30;
console.log(`${calcPercent}%`);

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sqSideLength = 4.75;
const sqPerimeter = sqSideLength + sqSideLength + sqSideLength + sqSideLength;
console.log(`Perimeter of square = ${sqPerimeter}cm`);

//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triPerimeter = 5 + 6 + 7;
console.log(`Perimeter of triange = ${triPerimeter}cm`);

//Q6. Calculate the area of a square. Each side is 5cm.
const sqArea = 5 * 5;
console.log(`Area of square = ${sqArea}cm²`);

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
console.log(halfPerimeter);
const areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - triSideLength1) * (halfPerimeter - triSideLength2) * (halfPerimeter - triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);

//Q8. Calculate the volume of a cube. Length of each side is 9cm.
const cubeSideLength = 9;
const cubeVol = cubeSideLength * cubeSideLength * cubeSideLength;
console.log(`Volume of cube = ${cubeVol}cm³`);

//Q9. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92 + (35.92 * 0.2);
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
    `Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`);

//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hour?
const averageHours = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(`Noemy's average hours: ${averageHours}`);

//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
const firstFiveResults = 75 + 70 + 85 + 90 + 100;
const totalResult = 85 * 6;
const sixthResult = totalResult - firstFiveResults;
console.log(`Score in the sixth test: ${sixthResult}`);

//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.
const averageOfEightTests = 78 * 8;
const averageNeeded = 80 * 9;
const minResult = averageNeeded - averageOfEightTests;
console.log(`James needs a minimum of ${minResult}% to get an 80% average`);
>>>>>>> 3cd3123d34e389238590f455bbd60952fc058948
