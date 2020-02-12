// Nests
// 1. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.
console.log('======= Task 1 ======')
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
for (let i in board) {
    console.log("Item " + i);
    for (let j in board[i]) {
        console.log(" " + board[i][j]);
    }
}



// 2. Doggo
// 2.1 Create a doggo object. Add name and breed as properties of the object.
console.log('======= Task 2.1 ==========');
const doggo = {
    name: 'gooboy',
    breed: 'Golden retriever',
    // 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
    food: ['treatos', 'more treatos', 'chimken'],
    getInfo: function () {
        for(let keys in this.food){
            console.log( "Doggo's favorite foods are  : " + this.food[keys] + "!");
            }
}
};




// 2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.food[1]);
// 2.4 Add a method that loops through and print all the doggo's favorite food.
// console.log(doggo.getInfo());
doggo.getInfo()
// 3.
// 3.1 Create an object called recipes.
console.log('========Task 3 =======')
const recipes = {
    ingredients: {
        butter: 'butter',
        sugar: 'sugar',
        flour: 'flour'
    } // 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
}; // 3.3 Without changing the previous code, add another ingredient - let's add ginger.

recipes.ingredients.ginger='Ginger';
console.log(recipes)
// 3.4 Change the ingredient sugar to brown sugar.
recipes.ingredients.sugar = 'Brown sugar';
console.log(recipes);

// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.