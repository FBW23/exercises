const person = {
    firstName: 'Plamen',
    lastName: 'Mitev',
    jobTitle: 'Web Developer',
    startDate: '21.04.2020',
    birthday: '11.15.1989',
    manager: {
        firstName: 'Big',
        lastName: 'Boss'
    }
};

const card = document.querySelector('#card-template').innerHTML;
const template = Handlebars.compile(card);
const templatePerson = template(person);

const output = document.querySelector('#output');

output.innerHTML += templatePerson;