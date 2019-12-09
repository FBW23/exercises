console.log('Sold cinema tickets:');
console.log(6450/15);


//SYLVIA'S INCOME
console.log("Syilvia's income:");
console.log(500*52,'$');

// SQUARE PERIMETER
console.log('Perimeter of the square:');
console.log(4.5*4,'cm');

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

//CUBE COLUME
console.log(' Volume of the cube:');
console.log(9*9*9,'cm or', 9**3,'cm');


//TRIANGLE AREA

console.log(' area of the triangle, sides 5, 6, 7 cm. Since the area of the triangle is calculated based on the length of 1 side and the height belonging to that side , we need to use the Pythagorean theorem first.:');
    console.log('b=5/|\\');
    console.log('  / | \\');
    console.log(' /  |x \\c=7');
    console.log('/___|___\\');   
    console.log('   a=6'); 
    console.log('triangle area:(a*x)/2'); 
    console.log('pythagoras:(a*a)=(b*b)+(c*c)=====> (x*x) = (a/2)*(a/2) + (b*b) =====> x2=3*3 + 5*5 =======> x2=9+25 = ')
    
    let halfA=a/2;
    
    let x2=(halfA)*(halfA) + (b*b);
    
    console.log(x2);
    console.log('=====> x = √x2  = 5,83095')
    let x = Math.sqrt(x2);
    

    console.log('area of half triangle: [(a/2)*x]/2 = ');
    console.log(halfA*x/2); 
    let halfArea=(halfA*x/2);
    console.log('area of the whole triangle = 2 * halfarea = ' )
    console.log(halfArea*2);




console.log("if we assume that 1 of the angles of the triangle is 90 degree,(although, this triangle simply can not have a 90 degree angle , based on the length of it's sides) then we don't  need pythagoras and can use 1 side as base and any other side as height and the equation looks like this: ");

console.log(' (a*b)/2 = (6*5)/2 =')
console.log((a*b)/2);
console.log(',or (a*c)/2 = (6*7)/2 =')
console.log((a*c)/2);
console.log(',or (b*c)/2 = (5*7)/2 =')
console.log((b*c)/2);

console.log('= area of the triangle')

console.log("There's also Heron's formula, where we first take the half of the triangle's perimeter (s) , then calculate the area of the triangle (  √(s(s-a)*(s-b)*(s-c)  ) =")
let s=(triPerimeter)/2;
console.log('s');
console.log(s);


let sroot=Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(sroot);


//BILLS INCLUDING TIPS

console.log('€22.35 + 10% tip');
let sum1=22.35;
let tip1=sum1*0.1;
console.log(sum1+tip1);


console.log('€26.67 + 15% tip');
let sum2=26.67;
let tip2=sum2*0.15;
console.log(sum1+tip1);


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







let currentScore=(78/8);
console.log(currentScore);
let expectation=(80/9);
console.log(expectation);

let y=(expectation/currentScore)*100;


console.log(y);