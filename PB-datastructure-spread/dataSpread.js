const euroCountries = ['Cehia',
    'Romania',
    'Italy'
];
const asianCountries = ['China', 'Afganistan', 'Mongolia'];

console.log(euroCountries.push(...asianCountries));
console.log(`------------------------------`);
const northAmerica = ['Washington', 'New York', 'Miami'];
const southAmerica = ['Argentina', 'Brasil'];
let euroAsia = northAmerica.concat(southAmerica);
console.log(euroAsia);
console.log(`-------------------------------------`);
const newContinent = [...northAmerica];
console.log(newContinent);
newContinent.push('Romania');
console.log(newContinent);
console.log(northAmerica);
console.log(`-------------------------------------`);


const largestNumber = number => Math.max(...number);
console.log(largestNumber([1, 2, 4, 5, 6, 7, 22, 12, 17]));
const smalestNumber = number => Math.min(...number);
console.log(smalestNumber([1, 2, 4, 5, 6, 7, 22, 12, 17]));
console.log(`---------------------------`);

const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};
let clonedPerson = {
    ...person
};
console.log(clonedPerson);
let employee = {
    ...person,
    ...job
};
console.log(employee);
employee.name = 'constantin';
employee.role = 'student';
console.log(employee);

console.log(`----------------------------------------------`);
const isWhole = (arr) => {
    let sum = 0;
    for (number in arr) {
        sum += arr[number];
    }
    let average = sum / arr.length;
    return average

};
        let result = isWhole([1, 2, 3, 4]);
        const isInteger = result = Number.isInteger(result); 
        console.log(result);