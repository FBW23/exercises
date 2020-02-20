console.log(`:::::::::::::::::::::::::::: Task 1 ::::::::::::::::::::::::::`)
// In the following code, we want fido to bark. Instead, we get an error. Why?
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
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
        }else {
            throw new Error ('Invalid Month Number!');
        }
    } catch (e) {
        console.error(e);
    }
};
console.log(getMonthName(11));
console.log(`:::::::::::::::::::::::::::: Task 3 ::::::::::::::::::::::::::`)
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. 
console.log(`:::::::::::::::::::::::::::: Task 4 ::::::::::::::::::::::::::`)
console.log(`:::::::::::::::::::::::::::: Task 5 ::::::::::::::::::::::::::`)