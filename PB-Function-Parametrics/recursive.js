// // //recursive functions
// // let i = 0;
// // function myRecursive () {
// //     console.log("call me!");
// //     myRecursive(); // call itself
// // };



// let i = 0;
// const arrowFunction = () => {
//     console.log("arrow functions " + i);
//     i++; //increment
//     if (i === 10) { // condition
// return; // stop the execution
//     } else {
//         arrowFunction(); //call itself
//     }
// };
// arrowFunction();
 
// //==================================================

// // const whileFunction = (number) => {
// //     console.log(number);
// //     return number++;
// //     if ()
// // }

// //=========================================
// function foo(i) {
//     if (i < 0) {
//         return;
//     } else {
//         console.log("begin: " + i); //in the beginning
//         foo(i - 1); //recursive call with decrement
//         console.log("end: " + i); //after call finished we go on with this
//         return;
//     }
// }

// foo(0);

// //=========================================
// function length(str) {
// 	let count = 0; 
// 	for(i = 0; i <= str.charAt[-1]; i++);
//     count =+ str.charAt[-1];
//     return count;
// }

// length("apple");

//=====================================================

function factorial(n) {
	if(n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

console.log(factorial(5));