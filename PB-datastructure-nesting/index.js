// 1. 2D Array
// Given the 2D Array below, 
// loop through the arrays to print the values.
console.log("*** 1 === 👇2D Array👇 === 1 ***")
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

// for loop
console.log('=====for loop=====')
for (i = 0; i < board.length; i++) {
  for (j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
};

// for in loop
console.log('=====for in loop=====')
for (i in board) {
  for (j in board[i]) {
    console.log(board[i][j]);
  }
};

// 2.Doggo 
console.log("*** 2 === 👇 Doggo 👇 === 2 ***");

//2.1 Create a doggo object. Add name and breed as properties of the object.
//2.2 Create an array within the doggo object named favorite 
//foods and add the doggo's favorite foods to the array.

const doggo = {
  name: "Snoopy",
  breed: "no breed",
  favoriteFoods: ['chicken', 'pork', 'beef'],
  printFoods: function () {
    let foods = [];
    for (i in this.favoriteFoods) {
      foods.push(this.favoriteFoods[i]);
    }
    return foods.toString();
  }
};

//2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.favoriteFoods[1]);
//2.4 Add a method that loops through and print all the doggo's favorite food.
console.log(doggo.printFoods());

//3, Recipes
console.log("*** 3 === 👇 Recipes 👇 === 3 ***");
//3.1 Create an object called recipes.
//3.2 Inside this object, you should create another object for
// ingredients and store ingredients as properties butter, sugar,
// flour etc. 
//Each property should have a string as its value.

const recipes = {
  "ingredients": {
    "butter": "flower butter",
    "sugar": "white sugar",
    "flour": "white flour"
  },
  printIngredients: function () {
    console.log(Object.values(this.ingredients)); // shortest way to take the values of an object
    // for (key in this.ingredients) {
    //   console.log(this.ingredients[key]);
    // }
  }
};

//3.3 Without changing the previous code, add another ingredient - 
// let's add ginger.
console.log('=====add ginger=====')
recipes.ingredients.ginger = "ginger";
console.log(recipes);


//3.4 Change the ingredient sugar to brown sugar.
console.log('=====change sugar to brown sugar=====')

recipes.ingredients.sugar = "brown sugar";
console.log(recipes);

//3.5 Write a method in the recipes object that prints the value of each
// ingredient in the ingredients object.
console.log('=====print the value of each ingredient=====')

recipes.printIngredients();