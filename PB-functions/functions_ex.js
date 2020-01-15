console.log(`------------Task1--------------`);
const addUp = (number) => {
    let sumUP = 0;
    for (let i = 1; i <= number; i++) {
        sumUP += i;
    } return sumUP;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

console.log(`------------Task2--------------`);
// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:

// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0
const powerCub = (a, b, c) => {
    let sum = 0;
    if (a) {
        sum += Math.pow(a, 3);
    } if (b) {
        sum += Math.pow(b, 3);
    } if (c) {
        sum += Math.pow(c, 3);
    } return sum;
}
    //     if (a && b && c) {
    //         return (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    //     } else if (a && b) {
    //         return (Math.pow(a, 3) + Math.pow(b, 3));
    //     } else if (a) { return Math.pow(a, 3); }
    //     else { return 0; }
    // }
    console.log(powerCub(1, 5, 9));
    console.log(powerCub(2));
    console.log(powerCub());
    console.log(`------------Task3--------------`);

    const dictionary = (string1, string2) => {
        if (string2.startsWith(string1) === true) {
            return true;
        } else {
            return false;
        }

    }
    console.log(dictionary("bu", "button"));
    console.log(dictionary("tri", "triplet"));
    console.log(dictionary("beau", "pastry"));


    console.log(`------------Task4--------------`);
    const lessThanOrEqualToZero = (nummer) => {
        if (nummer <= 0) {
            return true;
        } else {
            return false;
        }
    }
    console.log(lessThanOrEqualToZero(3));
    console.log(lessThanOrEqualToZero(0));
    console.log(lessThanOrEqualToZero(-4));
    console.log(lessThanOrEqualToZero(10));



    console.log(`------------Task5--------------`);

    function char_count(str, letter) {
        let letter_Count = 0;
        for (let position = 0; position < str.length; position++) {
            if (str.charAt(position) == letter) {
                letter_Count += 1;
            }
        }
        return letter_Count;
    }

    console.log(char_count("this is a string", "i"));

    console.log(`------------Task6--------------`);