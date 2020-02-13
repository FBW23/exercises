// map
const food = ["🐮", "🍠", "🐔", "🍚"];
const cook = (foodItem) => {
  switch (foodItem) {
    case "🐮":
      return "🍔";
    case "🍠":
      return "🍟"
    case "🐔":
      return "🍗"
    case "🍚":
      return "🍙"
    default:
      console.log("this is not valid")
  }
};

const processedFood = food.map(foodItem => cook(foodItem));
console.log(processedFood); 

// filter
const isVegetarian = (foodItem) => {
  switch (foodItem) {
    case "🍟":
      return "🍟";
    case "🍙":
      return "🍙";
    default:
      break;
  }
};


const filteredFood = processedFood.filter(foodItem => isVegetarian(foodItem));
console.log(filteredFood);


// reduce 

const reduceFood = processedFood.reduce((acc,val) => {
  return ['💩'];
});

console.log(reduceFood);