console.log()
console.log("loose comparison");
console.log(3 == '3'); // TRUE - the values are converted and compared
console.log("strict comparison");
console.log(3 === '3'); // FALSE
console.log("the difference is the first case we have two values of the same nature, in the second case they differ in that regard. Because in the first case the values are converted before comparison, in the second case not.");
console.log();
console.log("we should usually use the \"===\" to avoid confusion between string and number.");
console.log();
console.log("using \"=\" would result in an error because it syntactically makes no sense in this framework.");
console.log
let conway = true;
console.log();
console.log("Store the value true to a variable. Using a ternary operator,print the false option by checking the value of the initial variable ->", conway === false) ? 'true' : 'false';
console.log();
console.log("we will get the name \"Stacey\" because it is the first truthy value displayable.");