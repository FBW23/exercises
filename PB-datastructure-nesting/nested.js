//#### 1. 2D Array
//* Given the 2D Array below, **loop** through the arrays to print the values.

//```javascript

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];


for (let key=0; key<board.length; key++){
    for ( let value = 0 ; value < board[key].length; value++){
       
        console.log(board[key][value]);
    } 
   
};





//#### 2. Doggo
//* 2.1 Create a doggo object. Add name and breed as properties of the object.
const doggo = {
    fara: "Husk",
    Ozzy: "Labrador",
    Malbec: "Buldog",
    favoriteFoods: ["banana", "avocado", "chicken"],
    allFoods: function(){
        for(let key = 0; key < this.length; key++){
            for (let value = 0; value < this[key].length; value++){
                console.log(this.allFoods[value][key]);
            };
        }
    }
};





//* 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.

//* 2.3 Access the second element of the doggo's favorite foods. 

//* 2.4 Add a method that loops through and print all the doggo's favorite food.

//* 3.1 Create an object called recipes.
const recipes = {
     ingredients : {
        butter: "oi",
        sugar: "not too much",
        flour: "good",
        print: function(){
            for (prop in this.ingredients){
                for (value in this.ingredients[value]){
                console.log(this.print[value][prop]);
            }
        }
    }
}
}
//* 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
//* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
//* 3.4 Change the ingredient `sugar` to `brown sugar`. 
//* 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 