let x=63;
if(x%15===0){
    console.log("FizzBuzz");
}else if(x%3===0&&x%5){
    console.log('buzz')
}else{
    console.log('fizz')
}
//for short-handing the operation notice that it is enough for a number to be divided by the least common multiple of tow chosen numbers to be able to divide by any of them , in this case it is 15 ; 
console.log(225/15);