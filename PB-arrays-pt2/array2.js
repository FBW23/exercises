// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

// i.e.

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (myArray, myNumber) => {
    if (myArray[0] > myNumber) {
        console.log(myArray[0]);
    }
    if (myArray[1] > myNumber) {
        console.log(myArray[1])
        if (myArray[2] > myNumber);
    }
    console.log(myArray[2]);
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);

// 2. For the longest word. Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞ "development"
console.log('====task2===');

function findLongestWord(str) {
    let array = str.split(" ");
    let maxLength = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength.length) {
            maxLength = array[i];

        };



    }
    console.log(maxLength)
};

findLongestWord("this is a web development course");

//     3. Reverse. Create a function to reverse a number.

// i.e. reverse(34532) ➞ 23543


function reverse(number) {

    let numero = number.toString().split('').reverse('').join('');
    console.log(numero);
};
reverse(34532);

