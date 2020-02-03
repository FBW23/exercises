//1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
console.log(`::::::::::::::::::::::::::::::::::Task 1:::::::::::::::::::::::::::::::`)

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const second = euroCities[1];
console.log(second);

//2. Change the first item in the array to "Berlin".
console.log(`::::::::::::::::::::::::::::::::::Task 2:::::::::::::::::::::::::::::::`)
euroCities[0] = 'Berlin';
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log(`::::::::::::::::::::::::::::::::::Task 3:::::::::::::::::::::::::::::::`)
console.log(euroCities.length);
//4. Remove the last item of the array "euroCities". 
console.log(`::::::::::::::::::::::::::::::::::Task 4:::::::::::::::::::::::::::::::`)
euroCities.pop();
console.log(euroCities);
//5. Use an array method to add "Budapest" to the euroCities array. 
console.log(`::::::::::::::::::::::::::::::::::Task 5:::::::::::::::::::::::::::::::`)
euroCities.push('Budapest');
console.log(euroCities);
//6. **Bonus**: Remove the second and third items from the euroCities array. 
console.log(`::::::::::::::::::::::::::::::::::Task 6:::::::::::::::::::::::::::::::`)
euroCities.splice(1, 2);
console.log(euroCities);
//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
console.log(`::::::::::::::::::::::::::::::::::Task 7:::::::::::::::::::::::::::::::`)
const asianCities = ['Manila', 'Tokyo', 'Bangkok', 'Beijing', 'Kuala Lumpur'];
console.log(asianCities);
//8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
console.log(`::::::::::::::::::::::::::::::::::Task 8:::::::::::::::::::::::::::::::`)
const newCities = asianCities.splice(2,4);
console.log(newCities);

console.log(asianCities.length); //2
//9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
console.log(`::::::::::::::::::::::::::::::::::Task 9:::::::::::::::::::::::::::::::`)
const worldCities = euroCities.concat(asianCities);
console.log(worldCities); //length of 5

//10. Reverse the order of worldCities.
console.log(`::::::::::::::::::::::::::::::::::Task 10:::::::::::::::::::::::::::::::`)
worldCities.reverse();
console.log(worldCities);


//11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
console.log(`::::::::::::::::::::::::::::::::::Task 11:::::::::::::::::::::::::::::::`)
worldCities[2]= 'Toronto';
console.log(worldCities);

//12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
console.log(`::::::::::::::::::::::::::::::::::Task 12:::::::::::::::::::::::::::::::`)
worldCities.splice(1, 0, "Washington" );
console.log(worldCities);

//13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
//Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
//Expected Outputs: 
//"Berlin , London, Bangkok, Phnom Penh"
//"Berlin+London+Bangkok+Phnom Penh" 
console.log(`::::::::::::::::::::::::::::::::::Task 13:::::::::::::::::::::::::::::::`)
console.log(worldCities.toString());
console.log(worldCities.join(", "));
console.log(worldCities.join("+"));

//**Bonus**

//1. Write a program to reverse the string: "Hello World". 
console.log(`::::::::::::::::::::::::::::::::::Task 14:::::::::::::::::::::::::::::::`)
const myString = "hello world";
const myArray = myString.split("");
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(myArray.join(""));

//**Extra Practice**

//Print the results to the console.

//1. Make an array of your siblings' names or your favorite movie characters' names.
//2. Make an array of your parents' names.
//3. Combine these two arrays.
//4. Add your pets' names.
//5. Reverse the order of the array.
//6. Access one of your parents' names.
//7. Update the name of one of your parents. 

const mySiblings = ["Gazmend", "Astrit", "Blerina"];
const parentsNames = ["Adem", "Miliha"];

const allNames = mySiblings.concat(parentsNames);
console.log(allNames);
const catName = ["Nemo"];
allNames.push("Nemo")
console.log(allNames);

allNames.reverse();
console.log(allNames);

console.log(allNames[2]);

