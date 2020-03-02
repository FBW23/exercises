function compareArrays(arr1, arr2) {
    if(!arr1 || !arr2) {
        return 'Please input something!';
    }
    if (arr1.toString() === arr2.toString()) {
        return true;
    } else {
        return false;
    }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [3, 2, 1]));
console.log(compareArrays());