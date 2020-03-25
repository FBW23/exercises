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
}
let card = `
<div class="card">
    <h1>{{ firstName }} {{ lastName }}</h1>
    <p><label>Position: </label>{{ jobTitle }}</p>
    <p><label>Joined: </label>{{ startDate }}</p>
    <p><label>Birthday: </label>{{ birthday }}</p>
    <p><label>Reports to: </label>{{ manager.firstName }} {{ manager.lastName }}</p>
</div>
`
console.log(card)
let template = Handlebars.compile(card);
const personTemplate = template(person);

document.getElementById('output').innerHTML = personTemplate