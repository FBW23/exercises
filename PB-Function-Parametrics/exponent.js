// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
//
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp = 2) => {
  let result = 1; // starts from one

  for (let i = 0; i < exp; i++) { // i < exp (second argument = exp = 3)
    // *** for the first case ***
    // first loop result = 3 (num) * 1 (result) = 3
    // second loop result = 3 (num) * 3 (result) = 9
    // third loop result = 3 (num) * 9 (result) = 27

    // *** for the second case *** exp = 2 set to default
    // first loop result = 3 (num) * 1 (result) = 3
    // second loop result = 3 (num) * 3 (result) = 9
    result = num * result;
  }
  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9