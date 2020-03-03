// Destructuring
// Instructions

// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.
console.log('======Task 1  =======')
const bubba = [
    "Banana",
    "Cucumber",
    ['bread', 'cakes', 'pizza']
]

const [fruit, vegetable, food] = bubba;
console.log(fruit);
console.log(vegetable);
console.log(food);



// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.
console.log('======Task 2  =======')
const pubba = {
    Fran: 'Witch',
    Jonas: 'Vampire',
    Kim: 'Cat'
};


const {
    Fran,
    Jonas,
    Kim
} = pubba;
console.log(Fran);
console.log(Jonas);
console.log(Kim);
console.log(pubba);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greate

const heavy = {
    name: 'Metallica',
    greatestHit: 'Enter Sandman ',
    nationality: 'American',
    genre: 'Heavy Metal'


};
const getInfo = ({
    name,
    greatestHit,
    nationality,
    genre
}) => ` ${name} is an  ${nationality} their greatest hit  ${greatestHit}, they play ${genre} `;
console.log(getInfo(heavy));


const array = ['hello', 'world']; //string array
const nested = [array];
console.log(nested);

const object = {
    hello: 'world'
}; //string object
const nestedObject = {
    object
};
console.log(nestedObject);

const unpackedObject = {
    ...object
};
console.log(unpackedObject);

const curlyObject = {
    ...object
};
console.log(curlyObject)

const days = [];
for (let i = 1; i < 32; i++) {
    days.push(i)
};
console.log(days)
const days30 = [];
for (let i = 1; i < 31; i++) {
    days30.push(i)
};
console.log(days30)

const days28 = [];
for (let i = 1; i < 31; i++) {
    days28.push(i)
};
console.log(days28);

const month = [];
for (let i = 1; i < 13; i++) {
    switch (i) {
        case 1:
            month.push(days);
            break;
        case 2:
            month.push(days28);
            break;
        case 3:
            month.push(days);
            break;
        case 4:
            month.push(days30);
            break;
        case 5:
            month.push(days);
            break;
        case 6:
            month.push(days30);
            break;
        case 7:
            month.push(days);
            break;
        case 8:
            month.push(days);
            break;
        case 9:
            month.push(days30);
            break;
        case 10:
            month.push(days);
            break;
        case 11:
            month.push(days30);
            break;
        case 12:
            month.push(days);
            break;
        default:
            console.log('not a valid month')
    }
};
console.log(month)

const mixedObject= {};
for (let month = 1; month < 13; month++) {
    const currentMonth = [];
    for (let days = 1; days < 32; days++) {
        if (month === 2 && days === 29) {
            break;
        } else if (days === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
            break;
        }
        currentMonth.push(days);
    }
    mixedObject[month]= currentMonth;
}

console.log(mixedObject);
const read={
    a:{program:{
        identifier:'value'
    }
    }
}
console.log(read.a.program.identifier)