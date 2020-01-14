




function remainder(number, number2) {
    if (number % number2 === 0) {
        console.log('it is divisible ');
        
    } else {
        console.log('it is not divisible ');
        
    }
}
remainder(90, 30);

const remainder2 = function remainder(number, number2) {
    if (number % number2 === 0) {
        console.log('it is divisible .');
       
    } else {
        console.log('it is not divisible .');
     
    }
};
remainder2(9, 4);

const remainder3 = (number, number2) => {
    if (number % number2 === 0) {
        console.log('it is divisible');
      
    } else {
        console.log('it is not divisible ');
       
    }
};
remainder3(100, 5); 



function newFunction(param){
    console.log(`hello world ${param}`)
}
newFunction(`martina`)
newFunction(`julian`)