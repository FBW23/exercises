let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[i].length; j++)
        console.log(board[i][j]);
};

console.log(`-------------------ex2---------------`);
//  #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
console.log(`-------------------ex2---------------`);
const doggo = {
    name: 'felix',
    breed: 'toyterrier',
    favoriteFood: ['fish', 'meat', 'whiskas']
}
let dogFood = [];
console.log(`----2.3---`);
console.log(doggo.favoriteFood[1]);
console.log(`----2.4---`);
for (let k = 0; k < doggo.favoriteFood.length; k++) {

    console.log(doggo.favoriteFood[k])
};

// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
console.log(`----------------ex3-----------------`);
const recipes = {
    ingredients: {
        buter: '250gr',
        sugar:'2pks',
        flour: '1kg'
    },
    allIngredients: function () {
        let bigBox = [];
        for (key in recipes) {
          for (key in this.ingredients) {
            bigBox.push(this.ingredients[key]);
          }
          return bigBox;
    } 
}
};
recipes.ingredients.ginger='2slices';
console.log(recipes);
console.log(`-----------------------`);
recipes.ingredients.sugar='brown sugar';
console.log(`-----------------------`);
console.log(recipes);
console.log(`-----------------------`);
console.log(recipes.allIngredients());
