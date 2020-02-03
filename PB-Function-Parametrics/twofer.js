// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

<<<<<<< HEAD
// const twofer = who => {
//   return `Two for me and one for ${who}`;
// };

=======
>>>>>>> 2f3975d0cdae0feedbdc55bc4cd02a5b41c80663
const twofer = (who = 'you') => {
  return `Two for me and one for ${who}`;
};


console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
