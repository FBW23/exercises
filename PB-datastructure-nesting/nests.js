// # Nests
console.log();
console.log(`#### 1. 2D Array`);
console.log();
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
// ```

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}

console.log();
console.log(`#### 2. Doggo`);
console.log();

const doggo = {
  name: 'cerberus',
  breed: 'hellhound',
  favoriteFoods: ["souls", "dreams", "hopes"],
  methodThatLoops: function () {
    for (const item in this.favoriteFoods) {
      console.log(this.favoriteFoods[item]);
    }
  }
};

doggo.methodThatLoops();

console.log();
console.log(`#### 3. `);
console.log();
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

const recipes = {
  ingredients: {
    butter: '250 gr',
    sugar: '4 spoons',
    flour: '200 gr',
  },
  methodThatLoops2: function () {
    for (const item in this.ingredients) {
      console.log(this.ingredients[item]);
    }
  }
};

recipes.ingredients.ginger = '30 gr';
// delete recipes.ingredients.sugar;
// recipes.ingredients.brown_sugar = '4 spoons';
recipes.ingredients.sugar = '14 spoons of black sugar'
console.log(recipes);
recipes.methodThatLoops2();