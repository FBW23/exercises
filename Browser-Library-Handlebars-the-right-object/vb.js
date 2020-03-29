const person = {
    firstName: 'waga',
    lastName: 'wagowsky',
    jobTitle: 'writer',
    startDate: 'yesterday',
    birthday: '1986',
    manager: {
        firstName: 'no',
        lastName: 'one'
    }
};

const card = document.querySelector('#card-template').innerHTML;
const template = Handlebars.compile(card);
const templatePerson = template(person);

const output = document.querySelector('#output');

output.innerHTML = templatePerson;