const person = {
    firstName: "Julia",
    lastName: "Reis",
    jobTitle: "Web Developer",
    startDate: "01.03.2020",
    birthday: "30.08.1987",
    manager: {
        firstName: "Itamar",
        lastName: "Dutra"


    }

};
//grab the template to work on
const templateCard = document.querySelector('#card-template').innerHTML;
//connect the template
const connectTemplate = Handlebars.compile(templateCard);
//add the data from the object to the html
const personTemplate = connectTemplate(person);
//pass the data 
document.querySelector('#output').innerHTML += personTemplate;
