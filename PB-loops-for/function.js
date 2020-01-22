// Declaring a funtion

function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}



// Anonymos function
const myFunction = function multiplyWithTwo (number) {
    // here we can define what should happen
    // function block
    console.log(number * 2);
}; // ; because is using const!!!

// Calling function with an arguement
multiplyWithTwo(5);

//Arrow Function 
// => because we using Arrow
const myArrowFunction = (number) => {

    console.log(number *2);
};
myArrowFunction(8);

console.log(".................................................");
console.log(".................calling Arrow Function.........");


function newFunction(param) {
    console.log('hello World ' + param); // Parameter scope
    console.log(param);
}
newFunction('Nagster');
newFunction('Bendis');

// Declare Variables in function

const myfunction3 = function (firstName1, lastName1) {
    // let functionVeriable = Parameter

    let firstName = firstName1;
    let lastName = lastName1;
    console.log('hello World ' + firstName1 + ' ' + lastName1); // Parameter scope
    console.log(firstName);
}

myfunction3('Consta', 'Tine');
myfunction3('Julia', 'Reis');

console.log("......................................");

// testFunction();
// funtion testFunction(); {
//     console.log('How R You');

// }
console.log("................... FunctionConvert................");

const convert = (minutes) => {
    //calculate from Minutes to Seconds
    // minutes * 60 seconds = seconds
console.log(minutes*60);
return minutes*60;
};
    let output = convert(5);
    console.log(output);

    console.log("................shorter version...............");

    const convert2 = (minutes) => minutes*60;
    const myOutput2 = convert2(100);
    console.log(myOutput2);

    console.log("......................................");

    // function isEvenOrOdd(num) {
    //     if (num%2 === 0) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    console.log("......................................");

    const isEvenOrOdd = num => num%2 === 0 ? true:false;
    // isEvenOrOdd = num =>num%2 == 0; is the shortest!!!!
    console.log(isEvenOrOdd(3));

    console.log(".........................Exercise 22.01.20............");

 

//       console.log("..................2nd sample...................");

//       let count = 1;
//     for (i = 1; i <= 9 && i < hours; i++) {
//         if (i < minutes)
//             count++;
//         if ((i * 10 + i) < minutes)
//             count++;
//     }
//     for (i = 11; i <= 99 && i < hours; i = i + 11) {
//         if (i < minutes)
//             count++;
//         if ((i % 10) < minutes)
//             count++;
//     }
//     return count;

// let main() {
//     let hours = 24;
//     let minutes = 60;
//     count << countIdentical(hours, minutes);
//     return 0;
// }
      
//       console.log(count);

console.log("...........................................");

let count = 0;

for ( let hours = 1; hours<=12; hours++) {
    for (let minutes = 0; minutes <=60; minutes++) {
        count=(`${hours}${minutes}`);
        console.log(count);
    }
}
function threeNumber(x) {
    return Number.parseFloat(x).toFixed(3);
  }
  
  console.log(threeNumber(123.456));
  // expected output: "123.46"
  
  console.log(threeNumber(0.0000000004));
  // expected output: "0.00"
  console.log(threeNumber());

  console.log(".............................Solution.................");

  for(let i=0;i<60;i++) {
    //   console.log(Math.floor(i/10));
    //   console.log(i%10);
console.log({Math.floor(i/10)}${i%10})

  }