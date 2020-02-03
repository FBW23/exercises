// Declare a variable named "euroCities" and assign an array to the variable e.g. 
//["Paris", "London", "Valletta", "Prague", "Rome"]. 
//Declare another variable and assign the second item of the array as a value.

// Change the first item in the array to "Berlin".
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const second = euroCities[1];

euroCities[0] = "Berlin"; 
console.log(euroCities); 


// Print the length of the array "euroCities".
console.log(euroCities.length) //length of the array


// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

// Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities)

// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2)
console.log(euroCities)

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Tokyo", "Bangkok", "Beijing", "Kuala Lumpur", "Tokyo"]; 

// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
 let newcities = asianCities.splice(2,4);
 console.log(newcities)

 console.log(asianCities);
// Bonus: Use a method to concat euroCities with asianCities. 
//Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

// Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = "Toronto";
console.log(worldCities);

// Bonus: Remove no elements from the array of worldCities, 
//but insert "Washington" at the 2nd position.
worldCities.splice(1,0, "Washington");
console.log(worldCities)
// Bonus Write a program to join all elements of the result (worldCities) into a string. 
//Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; 
//Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.log(worldCities.toString());
console.log(worldCities.join(", "));

console.log(worldCities.join("+"))

// Bonus
// Write a program to reverse the string: "Hello World".
// Extra Practice
const myString = "hello world";
const myArray = myString.split("");
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(myArray.join());

console.log(myString.split("").reverse().join(""));

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
const siblings = ["Karen", "Cyndi"];
// Make an array of your parents' names.
const parents = ["Fatima", "Jose"]
// Combine these two arrays.
const altogether = siblings.concat(parents);
console.log(altogether)
// Add your pets' names.
 const pets = ["Phil", "Anselmo"];
altogether.push("Phil", "Anselmo");
console.log(altogether); 
 // Reverse the order of the array.

 altogether.reverse();
 console.log(altogether);

// Access one of your parents' names.
console.log(altogether[3])
// Update the name of one of your parents.

altogether[3] = "Maria";
console.log(altogether)