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


console.log(`--------------------2----------------`);

getMonthName = (month) => {
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
            return ` July = ${month}`
        }
        if (month === 8) {
            return ` August = ${month}`
        }
        if (month === 9) {
            return ` September = ${month}`
        }
        if (month === 10) {
            return ` Octomber = ${month}`
        }
        if (month === 11) {
            return ` November = ${month}`
        }
        if (month === 12) {
            return ` December = ${month}`
        } else {
            throw new Error('Invalid Month Number!'); //trebuie mereu sa fie inauntru la try-aceasta spune ce eroare vrem sa apara atunci cind nu corespnde conditiilor noastre.
        }
    } catch (e) { //catch - prinde eroarea,ceea ce nu corespunde conditiilor noastre 

        console.error(e);
    }

};
console.log(getMonthName(10));
console.log(`---------------------3--------------------`);

const reverseString = (string) => {
        
        try {
            if (typeof(string) === 'string' ) {
                let reverseWord = string.split("").reverse().join("");
                return reverseWord;
            } else {
                throw new Error(`ERROR! This is not a string!`)
            } 
        }catch (e) {
                console.error(e)
            }
        };

console.log(reverseString('kokomax'));
console.log(`=============4===================`);

const compareArrays=(arr1, arr2)=>arr1.sort().join(',') === arr2.sort().join(',');
    
    
  
  console.log(compareArrays([1, 2], [1, 3]));
  console.log(compareArrays([1, 2], [1, 2]));
  console.log(compareArrays([4, 5, 6], [4, 5, 6]));
   