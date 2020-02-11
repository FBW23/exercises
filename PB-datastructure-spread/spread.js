console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 1::::::::::::::::::::::::::::::::::::::::`)

const euroCountries = ['Germany', 'Italy', 'Spain'];
//console.log(euroCountries);

const asianCountries = ['Malaysia', 'China', 'Japan'];
//console.log(asianCountries);

euroCountries.push(...asianCountries);
console.log(euroCountries);

const middleEastCountries = ['Syria', 'Israel', 'Jordan'];
const balkanCountries = ['Albania', 'Serbia', 'Greece'];
const newArray = middleEastCountries.concat(balkanCountries);
console.log(newArray);

console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 2::::::::::::::::::::::::::::::::::::::::`)
const copyBalkanCountries = [...balkanCountries];
console.log(copyBalkanCountries);

console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 3::::::::::::::::::::::::::::::::::::::::`)

const largestNumber = number => Math.max(...number);
console.log(largestNumber([2, 57, 89, 323]));
console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 4::::::::::::::::::::::::::::::::::::::::`)

const smallestNumber = number => Math.min(...number)
console.log(smallestNumber([2, 57, 89, 323]));
console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 5::::::::::::::::::::::::::::::::::::::::`)

const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};

const clonePerson = {
    ...person
};
console.log(clonePerson);

const employee = {
    ...person,
    ...job
};
console.log(employee);

employee.name = 'Carl';
employee.role = 'Student';
console.log(employee);

console.log(`::::::::::::::::::::::::::::::::::::::::::::Task 6::::::::::::::::::::::::::::::::::::::::`)

const isWhole = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const result = isWhole( [ 4, 4, 5, 6, 6 ] ); 
console.log(result);
