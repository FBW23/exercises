// # Programming Basics: Arrays and Array Methods

// These exercises are designed for practicing arrays and array methods. **You may need to look up some methods to complete these tasks.** Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
console.log('=================================');
console.log('1.');

const euroCities= ["Paris", "London", "Valletta", "Prague", "Rome"];
let second=euroCities[1];
console.log(second);
console.log('=================================');


// 2. Change the first item in the array to "Berlin".
console.log('=================================');
console.log('2.');

//const euroCities= ["Paris", "London", "Valletta", "Prague", "Rome"];
euroCities[0]='Berlin';
console.log(euroCities);
console.log('=================================');

// 3. Print the length of the array "euroCities".
console.log('=================================');
console.log('3.');
console.log(euroCities.length);

console.log('=================================');

// 4. Remove the last item of the array "euroCities". 
console.log('=================================');
console.log('4.');

euroCities.pop();
console.log(euroCities);
console.log('=================================');

// 5. Use an array method to add "Budapest" to the euroCities array. 
console.log('=================================');
console.log('5.');
euroCities.push('Budapest');
console.log(euroCities);

console.log('=================================');

// 6. **Bonus**: Remove the second and third items from the euroCities array. 

console.log('=================================');
console.log('6.');
euroCities[1]=undefined;
console.log(euroCities);


euroCities.splice(1,2);
console.log(euroCities);

console.log('=================================');
// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
console.log('=================================');
console.log('7.');
const asianCities=["Manila","Bangkok","Beijing","Kuala Lumpur","Tokyo"];
console.log(asianCities);

console.log('=================================');

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
console.log('=================================');
console.log('8.');
const newCities=asianCities.splice(2,4);
console.log(newCities);
console.log('=================================');

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
console.log('=================================');
console.log('9.');


const worldCities=asianCities.concat(euroCities);
console.log(worldCities);


console.log('=================================');  

// 10. Reverse the order of worldCities.
console.log('=================================');
console.log('10.');
console.log(worldCities);
worldCities.reverse();
console.log(worldCities);

console.log('=================================');
// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
console.log('=================================');
console.log('11.');

worldCities[2]="Toronto";
console.log(worldCities);

console.log('=================================');

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
console.log('=================================');
console.log('12.');

worldCities.splice(1,0, "Washington");
console.log(worldCities);
console.log('=================================');

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 
console.log('=================================');
console.log('13.');

console.log(worldCities.toString());
console.log(worldCities.join(", "));
console.log(worldCities.join("+"));
console.log('=================================');

// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 

const myString='hello world';
const myArray=myString.split('');
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(myArray.join(''));

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const heroes=["Batman", "Rambo", "Gizmo", "Slater"];
// 2. Make an array of your parents' names.
const parents=["Steve Jobs", "Cindy Crawford"];
// 3. Combine these two arrays.
const allNames=heroes.concat(parents);
console.log(allNames);
// 4. Add your pets' names.
allNames.push('Tosun',"Fatma");
console.log(allNames);
// 5. Reverse the order of the array.

console.log(allNames.reverse());
// 6. Access one of your parents' names.
console.log(allNames[3]);
// 7. Update the name of one of your parents.
allNames[2]="Giselle Bundchen" ;
console.log(allNames);
