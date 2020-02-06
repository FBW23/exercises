console.log('======= Task 1 =======')

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 ,
 getInfo:function(){
    console.log(this.firstName, this.lastName + " is a student in class " + this.class )}
 }
 student.getInfo()
    // Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

    const johnny={
        firstName: "John", 
        lastName: "Smith", 
        city: 'Glasgow',
        Age: 41,
        profession:'Engineer',
   getInfo:function(){
   console.log(this.firstName,this.lastName +" is " +this.Age + " old",this.profession,"living in " +this.city+".")
    }
}
johnny.getInfo();
//     Bonus
// Write a method to get the length of the person object.

console.log(Object.keys(johnny).length);
console.log(Object.keys(student).length);