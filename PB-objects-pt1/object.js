console.log(`:::::::::::::::::::::::::::Task 1:::::::::::::::::::::::::::::`)
let user = {
    name: "John",
};

for (let property in user) {
    console.log(`${property} ${user[property]}`);
}

console.log(`:::::::::::::::::::::::::::Task 2:::::::::::::::::::::::::::::`)
//const getObjectValues = {
// choice1: "tea",
///  choice2: "coffee",
//  choice3: "milk"
//}
//console.log(Object.values(getObjectValues));

const getObjectValues = (obj) => {
    let array = [];
    for (const key in obj) {
        array.push(obj[key])
    }
    return array;
}
console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));
console.log(`:::::::::::::::::::::::::::Task 3:::::::::::::::::::::::::::::`)
const person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris',
    getInfo: function () {
        return (`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`);

    }
};

console.log(person.getInfo());