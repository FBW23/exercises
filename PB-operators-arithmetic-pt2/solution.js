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




