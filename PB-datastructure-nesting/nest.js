let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (let i = 0; i < board.length; i++) {
    // console.log(board[i]);

    for (let k = 0; k < board[i].length; k++)
        console.log(board[i][k]);
};
// board.forEach(function (element) {
//     console.log(element);
// });


console.log("............................................");

//     #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
    name: 'goofy',
    breed: 'husky',
    fFood: ['Meat', 'chicken', 'soup']


}

let dogFood = [];
for (let d = 0; d < doggo.fFood.length; d++) {

    console.log(doggo.fFood[d]);
}

console.log(doggo.fFood[1]);

console.log(".................................");


// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

const recipes = {

    ingredient: { 
        butter: '150g',
        sugar: '50g',
        flour: '1kg'
        
    },
  ingredients: function (){

    let ingredient = [];
    for (key in recipes) {
        for (key in this.ingredient[key]);
        
    }
  }

};
recipes.ingredient.ginger='2slice';    
console.log(recipes);

recipes.ingredient.sugar='brown sugar';
console.log(recipes);


