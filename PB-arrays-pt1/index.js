// Declare a variable named "euroCities" and assign an array 
//to the variable e.g. 
//["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another
// variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

let second = euroCities[1];

console.log(second);

// Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities);

// Print the length of the array "euroCities".

console.log(`The length of the array is : ${euroCities.length}.`);

// Remove the last item of the array "euroCities".

euroCities.pop();
console.log(euroCities);

// Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);

//Bonus: Remove the second and third items from the euroCities array.
// .splice() can add or delete items at a specific place

euroCities.splice(1,2); // delete starts at 1, delete 2 items 3th arg is added to the array 
console.log(euroCities);

//Create another variable named asianCities and assign an 
//array of at least 5 cities to the variable.

const asianCities = ["Manila", "Bangkok", "Beijing", "Kuala Lumpur", "Tokyo"];

// Use an array method to select items 2-4 from the array of asianCities 
// and store this in another variable.

const newCities  = asianCities.splice(2, 4); // cuts out 3 from the original
console.log(newCities);

// only 2 cities left
console.log(asianCities.length) // 2 splice() 

//Use a method to concat euroCities with 
//asianCities. Store the result in a variable (eg. worldCities).

// concat() putting arrays together in one array
const completeAsianCities = asianCities.concat(newCities);
const worldCities = euroCities.concat(completeAsianCities);
console.log(worldCities);
console.log(worldCities.length);

// Reverse the order of worldCities.

worldCities.reverse();
console.log(worldCities);

// Replace the 3rd item in the array of worldCities with "Toronto".
//worldCities.[2] = "Toronto" // dose the same thing
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);

// Remove no elements from the array of worldCities, 
// but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// Write a program to join all elements of the result (worldCities) 
// into a string. Example: worldCities = ["Berlin", "London", "Bangkok", 
//"Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok,
// Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

function arrToString(arr) {
  return arr.toString();
}

console.log(arrToString(worldCities));

function arrToString2(arr) {
  return arr.join("+");
}

console.log(arrToString2(worldCities));


// Write a program to reverse the string: "Hello World".

const myString = "hello world!";
const reverseString = myString.split("").reverse().join("");
console.log(reverseString);

// reverse a string 
const reverseIt = word => { return word.split("").reverse().join("")};

console.log(reverseIt('Hello'));

// Extra Practice

const mySiblings = ["Veselin", "Temenuzhka", "Julian"];
const parentsName = ["Ventsislav", "Stefka"];

const allNames = mySiblings.concat(parentsName); // add both together
console.log(allNames);

//const petsNames = ["Richi", "Djesa"];

allNames.push("Richi", "Djesa");

console.log(allNames);

allNames.reverse();

console.log(allNames);

console.log(allNames[6]);

// allNames[2] = "changed  name";
// console.log(allNames);