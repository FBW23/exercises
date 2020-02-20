//#### 10. Reformat an Array
//Given the following array: 
//```javascript
let origialArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
	     {key: 7, name: "Harry"},
	     {key: 8, name: "Ron"},
	     {key: 9, name: "Kenneth"},
	     {key: 10, name: "Kyle"}];

//* Reformat the array as follow: 
//```javascript

const getKeys = (origialArray) =>{
    let newArray = [{}];
    let key = Object.keys(origialArray);
    let value = Object.value(origialArray);
    return newArray.push(key + value);

}

getKeys();

//let newArray = [{1: "John"}, {2: "Maria"}, {3: "Oliver"}, {4: "Jane"}, {5: "Jack"}, {6: "Albert"}, {7: "Harry"}, {8: "Ron"}, {9: "Kenneth"}, {10: "Kyle"}];