class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} says woof`);
    }
}

let fido = new Dog("fido");
fido.bark();
console.log(fido.bark);

console.log(".................................");

// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument
// (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument. 
// * Example 
// * getMonthName(15) -> `Invalid Month Number!`

function getMonthName(month) {
    try {
        if (month === 1) {
            return `January = ${month}`;
        }
        if (month === 2) {
            return `February = ${month}`;
        }
        if (month === 3) {
            return `March = ${month}`;
        }
        if (month === 4) {
            return `April = ${month}`;
        }
        if (month === 5) {
            return `May = ${month}`;
        }
        if (month === 6) {
            return `June = ${month}`;
        }
        if (month === 7) {
            return `July = ${month}`;
        }
        if (month === 8) {
            return `August = ${month}`;
        }
        if (month === 9) {
            return `September = ${month}`;
        }
        if (month === 10) {
            return `October = ${month}`;
        }
        if (month === 11) {
            return `November = ${month}`;
        }
        if (month === 12) {
            return `December = ${month}`;
        }
        else {
            throw new Error('Invalid Month Number')
        }
    }
    catch (e) {
            console.error(e);
    }

    }

// Try === its a function to look for something inside another function
// Throw === its inside the "try" to catch the uneccasary items
// Catch === to catch items that is being Throwed
// They need each other

console.log(getMonthName(13));

console.log("..............................................")

