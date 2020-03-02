<<<<<<< HEAD
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
=======
// 1. Declare a variable named 'euroCities' and assign an array to the variable e.g. ['Paris', 'London', 'Valletta', 'Prague', 'Rome']. Declare another variable and assign the second item of the array as a value.
const euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];
console.log(euroCities);
const second = euroCities[1];
console.log(second); // London
// 2. Change the first item in the array to 'Berlin'.
euroCities[0] = 'Berlin';
console.log(euroCities);
// 3. Print the length of the array 'euroCities'
console.log(euroCities.length); // 5
// 4. Remove the last item of the array 'euroCities'
// POP
euroCities.pop();
console.log(euroCities);
// 5. Use an array method add 'Budapest'
euroCities.push('Budapest');
console.log(euroCities);
// 6. Bonus:
euroCities[1] = undefined; // not enough???
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea
console.log(euroCities);
//6. **Bonus**: Remove the second and third items from the euroCities array. 
console.log(`::::::::::::::::::::::::::::::::::Task 6:::::::::::::::::::::::::::::::`)
euroCities.splice(1, 2);
console.log(euroCities);
<<<<<<< HEAD
//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
console.log(`::::::::::::::::::::::::::::::::::Task 7:::::::::::::::::::::::::::::::`)
const asianCities = ['Manila', 'Tokyo', 'Bangkok', 'Beijing', 'Kuala Lumpur'];
console.log(asianCities);
//8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
console.log(`::::::::::::::::::::::::::::::::::Task 8:::::::::::::::::::::::::::::::`)
const newCities = asianCities.splice(2,4);
console.log(newCities);
=======
// 7. asianCitites
const asianCities = ['Manila', 'Bangkok', 'Beijing', 'Kuala Lumpur', 'Tokyo'];
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable

const newCities = asianCities.splice(2, 4); // cuts out 3 from the original
console.log(newCities);
// only 2 cities left
console.log(asianCities.length); // 2
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea

console.log(asianCities.length); //2
//9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
console.log(`::::::::::::::::::::::::::::::::::Task 9:::::::::::::::::::::::::::::::`)
const worldCities = euroCities.concat(asianCities);
<<<<<<< HEAD
console.log(worldCities); //length of 5
=======
console.log(worldCities); // length of 5
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea

//10. Reverse the order of worldCities.
console.log(`::::::::::::::::::::::::::::::::::Task 10:::::::::::::::::::::::::::::::`)
worldCities.reverse();
console.log(worldCities);

<<<<<<< HEAD

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
=======
// 11. Replace 3rd item with toronto
worldCities[2] = 'Toronto';
console.log(worldCities);

// 12. Washington should be added at 2nd, nothing is removed!
worldCities.splice(1, 0, 'Washington');
console.log(worldCities);

// 13. write a program to put an array into a string
console.log(worldCities.toString()); // puts everything together with a comma
console.log(worldCities.join(', ')); // puts all arrays together into one string with a seperator
console.log(worldCities.join('+'));

// 14. program to reverse the string hello world
const myString = 'hello world';
const myArray = myString.split('');
console.log(myArray.length);
myArray.reverse();
console.log(myArray);
console.log(myArray.join('')); // Without seperator
// shorter!!!
console.log(myString.split('').reverse().join(''));

// Sibling names = Katharina and Isabella
// 15.
const mySiblings = ['Katharina', 'Isabella'];
const parentsNames = ['Josef', 'Claudia'];
const allNames = mySiblings.concat(parentsNames); // add both together
console.log(allNames);
>>>>>>> a7a0015a16810ec9d371e1d227826cd72f0578ea

const allNames = mySiblings.concat(parentsNames);
console.log(allNames);
const catName = ["Nemo"];
allNames.push("Nemo")
console.log(allNames);

allNames.reverse();
console.log(allNames);
<<<<<<< HEAD

console.log(allNames[2]);

=======
// 6. access parent
console.log(allNames[3]);
// 7. change
allNames[2] = 'Felizitas';
console.log(allNames);

// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1]);
    }
    if (myArray[2] > myNumber) {
        console.log(myArray[2]);
    }
};
findGreatest([3, 4, 5], 4); // ➞ 5
findGreatest([10, 20, 30], 12); // ➞ 20, 30
findGreatest([0, 10, 3], 4); // ➞ 10

// 2. For the longest word. Create a function to find the longest word in a given string. i.e. tip: use split method!

// longestWord('this is a web development course'); // ➞ 'development'


const findVowels = str => {
    let sum = 0;
    const strVowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (strVowels.indexOf(str[i]) !== -1) {
            sum++;
        }
    }
    return sum;
};
console.log(findVowels('this is a string'));

const myVowels = mV => mV.replace(/[^aeiou]/gi, '').length;

console.log(myVowels('this is a string'));

//5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

//Examples:

//missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
>>>>>>> 4ecd04586d265f8509f7a1cbf325acaf21e4fa48
