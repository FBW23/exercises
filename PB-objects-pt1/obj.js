const person = {
    hobby: 'fishing',
    bornIn: 'kilimandjaro',
    listenMusik: 'trance'
}
for (const property in person) {
    console.log(`${property}- ${person[property]}`);
}
console.log(`----------------ex2---------------`);

const a = (object) => {
    let sum = [];
    for (const key in object) {
        sum.push(object[key]);
    }
    return sum;
};
console.log(a({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}));

console.log(`------------------------------ex3----------------`);

let personalitet = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",

    biography() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`
    }
};
console.log(personalitet.biography());

console.log(`------------------------------ex4----------------`);

