let myNumber = 5;

if (!(myNumber % 3) && !(myNumber % 5)){
    console.log('FizzBuzz');
} else if (!(myNumber % 5)){
    console.log('Buzz');
}else if (!(myNumber % 3)){
    console.log('Fizz')
}else{
    console.log(myNumber);
}
