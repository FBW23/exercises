// # Logical Thinking III

// Write pseudo-code for the following exercises on pen and paper.

// #### 1. Lowest to Highest
// Given an array of numbers from 1-9: 
// ```javascript
// [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
// ```
// Sort the array from lowest value to highest.
console.log(`======================1=============================`);
console.log(`======================1=============================`);
// #### 2. Alphabetical Order
// Given an array of names:
// ```javascript
// ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
// ```
// Sort the array based on alphabetical order from `a → z`. 
console.log(`======================2=============================`);
const names=["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
const abc=['A',"B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let position=[];
for(name in names){
    let firstLetter=name.charAt(0);
    let letterIndex=0;
    for(letter in abc){
        if(firstLetter===letter){
            letterIndex=abc.indexOf(letter);
     
        }
        if(letterIndex>letterIndex[names[name+1]]){
            position.push(names[name]);
            
        }
       
    }
    

}
console.log(position)

console.log(`======================2=============================`);
// **Bonuses**
// 1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript. 

// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings. 
