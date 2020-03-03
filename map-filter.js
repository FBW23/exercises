console.log('=============Map  function============')

const newArray = [1, 2, 3].map(function (value) {
    return value * 3 //new array with values x3 
})
console.log(newArray)

//filter
console.log('=============Filter function============')
const oldArrayFilter = newArray.filter(function (value) {
    return value % 2;
})

console.log(oldArrayFilter)

let arrayofObjects = [{
        fullName: 'Kostas Diakogiannis',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Martina Freundorfer',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 85
    },
    {
        fullName: 'Plamen',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 100
    },
    {
        fullName: 'Julia',
        courseHasTaken: 'JS Course',
        levelOfSatisfaction: 100
    },
    {
        fullName: 'Nicolo',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 77
    },
    {
        fullName: 'Kostas Diakogiannis',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Kostas Diakogiannis',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Kostas Diakogiannis',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Kostas Diakogiannis',
        courseHasTaken: 'PHP Course',
        levelOfSatisfaction: 45
    },
    {
        fullName: 'Bianca',
        courseHasTaken: 'Ruby Course',
        levelOfSatisfaction: 45
    },
]

const newArrayOfObjects = arrayofObjects.map(function (object) {
    if (object.levelOfSatisfaction > 80) {
        object.stateOfHappy = 'Found the Course perfect';
    } else if (object.levelOfSatisfaction > 50) {
        object.stateOfHappy = 'Content overall';
    } else if (object.levelOfSatisfaction <= 50) {
        object.levelOfSatisfaction = 'Customer is complaining, potential refund is going to be asked';
    }
    return object;
})
console.log(newArrayOfObjects);


console.log('========its go time!=======')

const goodScore = [67, 82, 91, 96, 54];
const badScore = [46, 48, 24, 33, 30];

const score = goodScore.concat(badScore);
console.log(score);

const average = score.reduce((total, amount) => total + amount);
console.log(average / score.length);

const newScore = average / score.length;

console.log(score);
const newerScore = average / score.length;
console.log(average / score.length);
const difference = newScore - newerScore;
console.log(difference.toFixed(2));

const bestScore = score.sort((a, b) => a - b)[score.length - 1];
console.log(bestScore)

console.log('==========its go time 2 ============');

const airlinePrices = [{
        airlinesName: 'Lufthansa',
        avgPriceTicket: 85.6
    },
    {
        airlinesName: 'Aegean',
        avgPriceTicket: 65.8
    },
    {
        airlinesName: 'KLM',
        avgPriceTicket: 102.82
    },
    {
        airlinesName: 'British Airways',
        avgPriceTicket: 114.9
    },
    {
        airlinesName: 'Iberia',
        avgPriceTicket: 77.2
    },
    {
        airlinesName: 'TAP Portugal',
        avgPriceTicket: 58.9
    },
    {
        airlinesName: 'Alitalia',
        avgPriceTicket: 84.2
    },
    {
        airlinesName: 'Air France',
        avgPriceTicket: 105.6
    },
    {
        airlinesName: 'Singapore Airlines',
        avgPriceTicket: 119.2
    },
    {
        airlinesName: 'Emirates',
        avgPriceTicket: 135.4
    },
]

const mamata = airlinePrices.filter(airlinePrices => airlinePrices.avgPriceTicket < 100).map(obj => obj.airlinesName);
console.log(mamata)
console.log('========quote======')
let myQuote = ['it', 'is', 'Friday', 'and', 'i', 'am', 'already', 'exhausted', 'to', 'think', 'of', 'a', 'better', 'quote'];
const averageQuote = myQuote.reduce((total, amount) => total + ' ' + amount);

console.log(averageQuote)

console.log('========sales======');


let sales = [

    'smartphone',
    'smartphone',
    'laptop',
    'smartphone',
    'laptop',
    'air_cooler',
    'smartphone',
    'smartphone',
    'laptop',
    'smartphone',
    'smart_watch',
    'iphone'

];

function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

console.log(count(sales))

class Greek {
    constructor() {
        this.nationality = 'Greece';
    }
}

class Person extends Greek {
    constructor(firstName, lastName, bankAccountInDollar, countryOfResidence, dollarToLocal) {
        super(...arguments);
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccountInDollar = bankAccountInDollar;
        this.countryOfResidence = countryOfResidence;
        this.dollarToLocal = dollarToLocal;

    }
    convertToLocal = () => {
        this.localMoney = this.bankAccountInDollar * this.dollarToLocal;
    }
}

const jake = new Person('Konstantinos', 'Diakogiannis', 1000, 'Greece', 0.86);
const gidday = new Person('Crocodile', 'Dundee', 2000, 'Australia', 1.83);
gidday.convertToLocal();
jake.convertToLocal()

console.log(gidday)


console.log('=========Classes=======')


class AllSpecies {
    constructor(species, numOfEyes, numOfLegs, hasTail) {
        this.species = species;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs;
        this.hasTail = hasTail;

    }
}
class Tiger extends AllSpecies {
    constructor(colorFur, eyeColor, region, eatMeat, name, age, height, length, gender) {
        super('Tiger', 2, 4, true);
        this.colorFur = colorFur;
        this.eyesColor = eyeColor;
        this.region = region;
        this.eatMeat = eatMeat;
        this.name = name;
        this.age = age;
        this.height = height;
        this.length = length;
        this.gender = gender;
        this.furry = function () {
            return this.colorFur
        }
    }
    roar = function () {
        return ' I am the best tiger, I make ROOOOAAAARRRR'
    }
}
class SiberianTiger extends Tiger {
    constructor() {
        super('Black-white', 'blue', 'Siberia', false, ...arguments);

    }
}
class BengalTiger extends Tiger {
    constructor() {
        super('orange', 'brown', 'india', true, ...arguments);
        // this.name = name;
        // this.age = age;
        // this.height = height;
        // this.length = length;
        // this.gender = gender;
    }
}
const oscar = new SiberianTiger('The Nights King', 990, 88, 204, 'White Walker');
const tygo = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
// console.log(tygo.furry());
// console.log(oscar.furry());
// for (value of oscar);
// console.log(value);

const amount = [5, 5, 2, 6, 1];
const items = ['chocolate', 'bananas', 'rice', 'beers', 'deodorant'];
const multiArray = [];
for (let i = 0; i < items.length; i++) {
    multiArray.push([items[i], amount[i]]);
}

// console.log(multiArray)
for (key in multiArray) {
    console.log(`Please Buy ${multiArray[key][1]} x ${multiArray[key][0]}`);
}