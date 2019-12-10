console.log('Sold cinema tickets:');
console.log(6450/15);


//SYLVIA'S INCOME
console.log("Syilvia's income:");
console.log(500*52,'$');

//PERCENTAGE of 17/30

console.log('percentage of 17 /30:');
console.log(17/30*100);

// SQUARE PERIMETER
console.log('Perimeter of the square:');
console.log(4.75*4,'cm');

//TRIANGLE PERIMETER
console.log('Perimeter of the triangle:');
console.log('a(5)+b(6)+c(7)','cm');
let a=6;
let b=5;
let c=7;

let triPerimeter=a+b+c;
console.log(triPerimeter);

//SQUARE AREA
console.log('Area of the square:');
console.log(5*5,'cm or', 5**2,'cm');

//CUBE VOLUME
console.log(' Volume of the cube:');
console.log(9*9*9,'cm or', 9**3,'cm');


//TRIANGLE AREA



console.log("There's Heron's formula, where we first take the half of the triangle's perimeter (s) , then calculate the area of the triangle (  √(s(s-a)*(s-b)*(s-c)  )  (  √(9(9-6)*(9-5)*(9-7)  )  (  √(9(3)*(4)*(2)  )  (  √(216 )=")
let s=(triPerimeter)/2;
console.log('s=');
console.log(s);


let sroot=Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log( ' √(s(s-a)*(s-b)*(s-c) ' )
console.log(sroot);


//BILLS INCLUDING TIPS

console.log('€22.35 + 10% tip');
let sum1=22.35;
let tip1=sum1*0.1;
console.log(sum1+tip1);


console.log('€26.67 + 15% tip');
let sum2=26.67;
let tip2=sum2*0.15;
console.log(sum2+tip2);


console.log('€35.92 + 20% tip');
let sum3=35.92;
let tip3=sum3*0.2;
console.log(sum3+tip3);


//AVERAGE


console.log("Noemi's average working hours per day:");
let totalH=8+6+5+9+8+2+1+8.5+7+4;
let dayCount=10;
console.log(totalH/dayCount);



console.log("Score in the 6th test:");


let firstFive=75+70+85+90+100;
let testCount=6;
let avgScore=85;
let z=avgScore*testCount-firstFive;


console.log(z);



//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.


console.log("James needs minimum:");



let currentScore=78;
console.log('Current results:', currentScore);
let expectation=80;
console.log('Expected result:', expectation);


console.log(' expectation=((8*currentScore)+i)/9');
console.log('80*9=(78*8)+i');
let i=720-624;


console.log('is this the correct one?');
console.log(i, '%');


console.log(8*78);
let alap=8*78;
console.log(alap+96);
let alap2=alap+96;

console.log(alap2/9);



