
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities=['Paris','London','Valleta','Prague','Rome'];
  let second=euroCities[1];
  console.log(second);

//   Change the first item in the array to "Berlin".
euroCities[0]='Berlin';
console.log(euroCities);
// Print the length of the array "euroCities".
console.log(euroCities.length);
// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);
// Use an array method to add "Budapest" to the euroCities array.
euroCities.push('Budapest');
console.log(euroCities);
// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities);
// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities=['Manila','Bangkok','Beijing','Kuala Lumpur','Tokyo'];
// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
const newCities=asianCities.splice(2,3);
console.log(newCities);
// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let concaty=euroCities.concat(asianCities);
console.log(concaty);
// Reverse the order of worldCities.

let worldCities=concaty.reverse();
console.log(worldCities);
// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2]='Toronto';
console.log(worldCities);
// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1,0,'Washington');
console.log(worldCities);

// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.log(worldCities.join(', '),(' + '));

// Write a program to reverse the string: "Hello World".
const phrase='Hello world';
let new1=phrase.split('');
console.log(new1); 
console.log(new1.reverse());
console.log(new1.join(''));
console.log(phrase.split('').reverse().join(''));
// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
// Make an array of your parents' names.
// Combine these two arrays.
// Add your pets' names.
// Reverse the order of the array.
// Access one of your parents' names.
// Update the name of one of your parents.



const mySiblings=['Willes','Wilson'];
const parentsNames=['Joao','Leomagia'];
const allNames=mySiblings.concat(parentsNames);
console.log(allNames);
 allNames.push('Tosun','Fatma');
console.log(allNames);
allNames.reverse();
console.log(allNames);
console.log(allNames[3]);
allNames[2]='Felizitas';
console.log(allNames);