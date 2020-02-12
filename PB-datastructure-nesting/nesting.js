console.log(`::::::::::::::::::::::;Task 1::::::::::::::::::::::::::`)
//.......................................................................................
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

board.forEach(x => x.forEach(y => console.log(y)));


console.log(`::::::::::::::::::::::;Task 2::::::::::::::::::::::::::`)


const doggo = {
    name: 'Roger',
    breed: 'Siberian Husky',
    favoriteFood: ['Meat', 'chicken', 'soup']
}
let dogFood = [];
for (let d = 0; d < doggo.favoriteFood.length; d++) {
    console.log(doggo.favoriteFood[d]);
}
console.log(doggo.favoriteFood[1]);


console.log(`::::::::::::::::::::::;Task 3::::::::::::::::::::::::::`)

const recipes = {
    ingredients: {
        butter: 'bio butter',
        sugar: 'cane sugar',
        flour: 'flour 450'
    },
    printIngriedents: function () {
        for (keys in this.ingredients) {
            console.log(this.ingredients[keys]);
        }
    }
};
console.log(recipes);
recipes.ingredients.ginger = 'spicy';
console.log(recipes);
recipes.ingredients.sugar = 'brown sugar';
console.log(recipes);
recipes.printIngriedents();