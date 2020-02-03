// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. 
// ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of 
// the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let second = euroCities[1];
console.log(second);

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

// 3. Print the length of the array "euroCities".
console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log(euroCities);


// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.push("Budapest");
console.log(euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities.splice(1,2);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Manila", "Bangkok", "Beijing", "Kuala Lumpur", "Tokyo"];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
const newCities = asianCities.splice(2, 4);
console.log(newCities);

// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// 10. Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities[2] = "Toronto";
console.log(worldCities);


// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);


// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 
console.log(worldCities.join(", "));
console.log(worldCities.join("+"));


// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 
const myString = "Hello World";
const myArray = myString.split("");
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(myArray.join(""));

console.log(myString.split("").reverse().join(""));

// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const mySiblings = ["Steve", "Clément"];

// 2. Make an array of your parents' names.
const parentsNames = ["Jacques", "Claudine"];

// 3. Combine these two arrays.
const allNames = mySiblings.concat(parentsNames);
console.log(allNames);

// 4. Add your pets' names.
allNames.push("MC");
console.log(allNames);

// 5. Reverse the order of the array.
allNames.reverse();
console.log(allNames);

// 6. Access one of your parents' names.
console.log(allNames[2]);

// 7. Update the name of one of your parents. 
allNames[1] = "Marie";
console.log(allNames);
