// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```
console.log('----------------------1. 2D Array')
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}


// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
console.log('----------------------2. Doggo')

const doggo = {
    name: 'Whatever',
    breed: 'shet',
    favoriteFood: ['cats', 'almost dead cats', 'more cats', 'dead cats'],
    allTheFood: function() {
        for (food in this.favoriteFood) {
            console.log(this.favoriteFood[food]);
        }
    } 
};
// * 2.3 Access the second element of the doggo's favorite foods. 
console.log(doggo.favoriteFood[1]);
console.log();
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
doggo.allTheFood();


// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, 
// sugar, flour etc. Each property should have a string as its value. 
console.log('----------------------3. recipes')

const recipes = {
    ingredients: {
        butter: '250g',
        sugar: '100g', 
        flour: '500g', 
        water: 'some'
    },
    allIngredients: function(){
        for (value in this.ingredients) {
            console.log(this.ingredients[value]);
            // console.log(Object.values(this.ingredients)); => instead of the for...in loop
        }
    }
};
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
recipes.ingredients.ginger = '20g';

// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
recipes.ingredients.sugar = '100g brown sugar';

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
recipes.allIngredients();
