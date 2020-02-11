

const euroCountries =  ['Cehia',
'Romania',
'Italy',
'Spain'];
const asianCountries = [ 'China', 'Afganistan', 'Mongolia', 'Thailand' ];

console.log(euroCountries.push(...asianCountries));
console.log(`------------------------------`);
let euroAsia = euroCountries.concat(asianCountries);
console.log(euroAsia);

