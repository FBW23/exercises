console.log(`:::::::::::::::::::::::::::: Task 1 ::::::::::::::::::::::::::`)
// In the following code, we want fido to bark. Instead, we get an error. Why?
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark () {
        console.log(`${this.name} says woof`);
    } //first error 
}

let fido = new Dog("fido");
fido.bark();

console.log(`:::::::::::::::::::::::::::: Task 2 ::::::::::::::::::::::::::`)
//function getMonthName(mo) {
//  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// }
//console.log(getMonthName(15));

const getMonthName = (month) => {
    try {
        if (month === 1) {
            return ` January = ${month}`
        }
        if (month === 2) {
            return ` February = ${month}`
        }
        if (month === 3) {
            return ` March = ${month}`
        }
        if (month === 4) {
            return ` April = ${month}`
        }
        if (month === 5) {
            return ` May = ${month}`
        }
        if (month === 6) {
            return ` June = ${month}`
        }
        if (month === 7) {
            return ` Jul = ${month}`
        }
        if (month === 8) {
            return ` Aug = ${month}`
        }
        if (month === 9) {
            return ` Sep = ${month}`
        }
        if (month === 10) {
            return ` Oct = ${month}`
        }
        if (month === 11) {
            return ` Nov = ${month}`
        }
        if (month === 12) {
            return ` Dec = ${month}`
        } else {
            throw new Error('Invalid Month Number!');
        }
    } catch (e) {
        console.error(e);
    }
};
console.log(getMonthName(11));
console.log(`:::::::::::::::::::::::::::: Task 3 ::::::::::::::::::::::::::`)
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. 

function reverseString(s) {
    try {
        if (typeof (s) === 'string') {
           const reverseWord = s.split("").reverse().join("");
           return reverseWord;
        } else {
            throw new Error(`ERROR! This is not a string!`);
        }
        //  s = s.split("").reverse().join("");
    } catch (er) {
        console.error(er);
    }
}
console.log(reverseString('string'));
console.log(`:::::::::::::::::::::::::::: Task 4 ::::::::::::::::::::::::::`)
function compareArrays(arr1,arr2){
  
    if(!arr1  || !arr2) return
   
     let result;
   
   arr1.forEach((e1, i)=>arr2.forEach(e2=>{
     
          if(e1.length > 1 && e2.length){
             result = compareArrays(e1,e2);
          }else if(e1 !== e2 ){
             result = false
          }else{
             result = true
          }
     })
   )
   
   return result
   
 }
  console.log(compareArrays([1, 2], [1, 3]));
  console.log(compareArrays([1, 2], [1, 2]));
  console.log(compareArrays([4, 5, 6], [4, 5, 6]));
  console.log(compareArrays([4, 7, 6], [4, 5, 6]));


console.log(`:::::::::::::::::::::::::::: Task 5 ::::::::::::::::::::::::::`)