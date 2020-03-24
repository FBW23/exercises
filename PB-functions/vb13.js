console.log(`// **13. Validate Email.**
// Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

// * The string must contain an "@" character.
// * The string must contain a "." character.
// * The "@" must have at least one character in front of it.
// * e.g. "john@example.com" is valid while "@example.com" is invalid.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.`);

// const exercise13 = (email) => {
//     let result = false;

//     //  console.log(` email.indexOf('@','.')>-1: ${email.indexOf('@','.')>-1}`)

//     // console.log(`email.lastindexOf('.')>email.indexOf('@',+1)${email.lastIndexOf('.')>email.indexOf('@',+1)} `)




//     if (email.indexOf('@', '.') > -1 && email.indexOf('@') - 1 > 0 && email.lastIndexOf('.') > email.indexOf('@', +1)) {


//         // console.log(` email.indexOf('@','.')>-1: ${email.indexOf('@','.')>-1}`)
//         // console.log(email.indexOf('@') - 1 > 0)
//         // console.log(`email.lastindexOf('.')>email.indexOf('@',+1)${email.lastIndexOf('.')>email.indexOf('@',+1)} `)

//         result = true;
//     }

//     return result;
// }

// console.log(exercise13(' @yahoo.com'));





const exercise13 = (email) =>

    email.indexOf('@', '.') > -1 && email.indexOf('@') - 1 > 0 && email.lastIndexOf('.') > email.indexOf('@', +1) &&
    email.charAt(0) !== ' ' && email.indexOf('@') === email.lastIndexOf('@')



console.log(exercise13('vagob@yahoo.com'));