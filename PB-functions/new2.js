
    let sum=0;
    for(let i=1; i<1000;i++){
    
        if ((i%3===0) || (i%5===0)){
            sum+=i;
            
        } 
    } 
    console.log(sum);

    // 2. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
    computeGreatest = (number1, number2)=>{
            let greatest=1;
        for (let k=1; k===greatest; k++){
           
            if(number2%greatest===0 && number2%greatest===0){
                return(greatest);
            }
    }
    

    }

    const computeGreatest2= computeGreatest(6, 12);
    console.log(computeGreatest2);
    // 3. Make a function that prints each digit of the given number in a separate line: Given 123456000 should print in single lines: 1 - 2 - 3 - 4 - 5- 6- 0 -0 -0
    // // NOTE let test = 123456000;
    // console.log(test.toString().length); // 9
    // // test is still a number afterwards

    
    let num = 12345678900;
    let string = num.toString();
    for (let l = 0; l<=string.length; l++){
        let current = string.charAt(l);
        console.log(current);
    }




    // 4. Write a JavaScript program to find the armstrong numbers of 3 digits. 
    // Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
let a;
let b;
let c;


 for (a = 1; a < 10; ++a){
   for (b =0; b < 10; ++b){
        for (c = 0; c < 10; ++c){
          let cube = (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3));
          let plus = (a * 100 + b * 10 +  c*1);
          if (cube === plus) 
           {     
             console.log(cube);
            }
         }
       }
    }
  
    // 4. According to Wikipedia a happy number is defined by the following process :
    // "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
    // Write a JavaScript program to find and print the first 5 happy numbers
    // let p=1;
    // let sumSquare=Math.pow((p.toString().charAt(0),2 )+ Math.pow( p.toString().charAt(1)));
    
    // for (let startingNumber=1; p<=5; p++){
    //     if(sumSquare===1){
    //         console.log(p);
    //     }
    // }

 function happy_number(num1) {
    let m, n ;
    let c = [] ;
 
    while(num1 != 1 && c[num1] !== true) 
    {
        c[num1] = true ;
        m = 0 ;
        while (num1 > 0) {
            n = num1 % 10 ;
            m += n * n ;
            num1 = (num1 - n) / 10 ;
        }
        num1 = m ;
    }
    return (num1 == 1) ;
}
 
let cnt = 5;
let num1 = 1;
let f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num1))
        num1++ ;
f5 = f5+(num1 + ", ") ;

    num1++ ;
}
console.log('First 5 happy numbers are : '+f5);

let numberCount = 0;
for (let startingNumber = 1; numberCount < 5; startingNumber++) {
    let result = startingNumber;
    while (true) { // endless loop
        if (result === 1) {
            numberCount++;
            console.log('Yeah! We found the ' + numberCount + '. happy number: ' + startingNumber + ' :-)');
            break; // stop endless loop
        } else if (result === 4 || result === 37 || result === 58) {
            //console.log('Oops, we found an unhappy number :' + startingNumber + ' :-(');
            break; // stop endless loop
        } else {
            if (result < 10) {
                result = result * result;
            } else if (result < 100) {
                let modulo = result % 10;
                result = (Math.floor(result / 10) * Math.floor(result / 10)) + (modulo * modulo);
            } else {
                let firstNumber = Math.floor(result / 100); // 1
                let secondNumber =  Math.floor((result - firstNumber * 100)/10); // 4
                let modulo = result % 10; // 5
                result = (firstNumber * firstNumber) + (secondNumber * secondNumber) + (modulo * modulo);
            }
            //console.log(result);
        }
    }
}


    