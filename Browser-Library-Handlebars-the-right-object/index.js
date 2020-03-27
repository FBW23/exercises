document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('#output');
    const info = {
        'firstName': 'Edouard',
        'lastName': 'Fion',
        'jobTitle': 'porn actor',
        'startDate': 2020,
        'birthday': '4.20.1969',
        'manager': {
            firstName: 'John',
            lastName: 'Biroute'
        }
    };
    const structure = `
    <h1>{{ firstName }} {{ lastName }}</h1>
    <p><label>Position: </label>{{ jobTitle }}</p>
    <p><label>Joined: </label>{{ startDate }}</p>
    <p><label>Birthday: </label>{{ birthday }}</p>
    <p><label>Reports to: </label>{{ manager.firstName }} {{ manager.lastName }}</p>`;

    let template = Handlebars.compile(structure);
    const myTemplate = template(info);
    container.innerHTML += myTemplate;


});