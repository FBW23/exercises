console.log('======= Task 1 =======')

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    getInfo: function () {
        console.log(this.firstName, this.lastName + " is a student in class " + this.class)
    }
}
student.getInfo()
// Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const johnny = {
    firstName: "John",
    lastName: "Smith",
    city: 'Glasgow',
    Age: 41,
    profession: 'Engineer',

    getInfo: function () 
        {
            console.log(this.firstName, this.lastName + " is " + this.Age + " old", this.profession, "living in " + this.city + ".")
        }
        
    } 

johnny.getInfo();

//     Bonus
// Write a method to get the length of the person object.

// console.log(Object.keys(johnny).length);
// console.log(Object.keys(student).length);


/Objeto
const obj = {a:1, b:2, c:3};
//Para prop (propriedade) in obj (objeto) faça
for (const prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}
let sum=0;
for (const key in obj){
    sum += obj[key];
}
console.log(sum);
let count = 0;
for (const keys in obj) {
    count ++;
}
console.log (count);
const array = Object.keys(obj);
let string = '';
for (const index in array) {
   string += array[index];
};
console.log(string);
//also for strings
for(const i in string) {
    console.log('hello' + string.charAt(i));
}