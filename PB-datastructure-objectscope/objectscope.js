const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
 biography: function(){
     let ocupation = ' is a student in class '
    return(`${this.firstName} ${this.lastName} ${ocupation}${this.class}`);}
};

console.log(`---------------------------try2--------------`);
const arbeiter = {
    prenume: 'andrew',
    nume: 'grizman',
    virsta: 33,
    job: 'student',
    bornCity: 'chisinau',
 getProfile:function () {return `${this.prenume} ${this.nume} is a young ${this.job} born in ${this.bornCity}`
},
getLenght: function () {
    return `The length of the arbeiter is: ` + Object.keys(this).length
}
};
console.log(student.biography());
console.log(arbeiter.getProfile());
console.log(arbeiter.getLenght());



