const food = ['cow', 'potato', 'hen', 'corn']
let cook = (foodItem) => {

    switch (foodItem) {
        case "cow":
            return "hamburguer";
        case "potato":
            return "fries";
        case "hen":
            return "chicken";
        case "corn":
            return "popcorn";
        default:
            console.log("notvalid");

    }
};
const processedFood = food.map(cook);
console.log(processedFood);

const isVegeterian = (veggieItem) => {
    switch (veggieItem) {
        case "fries":
            return "fries";
        case "popcorn":
            return "popcorn";
        default:
            break;
    }
};

const veggieFood = processedFood.filter(isVegeterian);
console.log(veggieFood);

const eat = (previous, meal)=> {
    return "poop"
};

const poop = processedFood.reduce(eat);
console.log

//edabit

function caNest (array1, array2){
    let arr1Min = Math.min(...array1);
    let arr2Min = Math.min(...array2);
    let arr1Max = Math.max(...arr1);
    let arr2Max = Math.max(...array2);
    if(arr1Min > arr2Min && arr1Max < arr2Max){
      return true;
    } else{
        return false;
    }
}