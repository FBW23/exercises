

const student = {
    age: 14,
    firstName: "John",
    lastName: "Smith",
    class: 12,
    sentence: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
};

console.log(student.sentence());

const person = {
    firstName: 'Julia',
    lastName: 'Reis',
    age: 32,
    city: 'Berlin',
    getInformation: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old student living in ${this.city}`;
    },
    getLength: function () {
        return Object.keys(this).length;

    },
    getLengthWithLoops: function () {
        let total = 0;
        for (let i = 0; i < Object.keys(this).length; i++) {
            ++total;

        } return total;
    }

};

console.log(person.getInformation());
console.log(person.getLength());
console.log(person.getLengthWithLoops());



