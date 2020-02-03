// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

<<<<<<< HEAD
const twofer = (who = "you") => {
=======
const twofer = (who = 'you') => {
>>>>>>> f205c8b4608b3ce1a67671eedeca0937cb0a91b2
  return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
