// # Inputs & Outputs

// Write down pseudo-code on pen and paper for the following patterns:

// #### 1.

// | Input  | Output |
// | :----: | :----: |
// |  2, 5  |   5    |
// | 0, 100 |  100   |
// | 52, 35 |   52   |


// if a>b
//     return a
//     if a<b
//     return b


let a=2;
let b=5;

if (a>b){
    console.log(a);

} else{
    console.log(b);
}

// #### 2.

// | Input  | Output |
// | :----: | :----: |
// |  5, 5  |  true  |
// | 40, 40 |  true  |
// | 50, 51 | false  |





// if a===b
// return true
// if a!==b
// return false

let c=5;
let d=5;

if (c === d) {
    console.log(true);
} else {
    console.log(false);
}


// // #### 3.

// // |  Input   | Output |
// // | :------: | :----: |
// // | 110, 100 |  true  |
// // | 150, 100 |  true  |
// // | 50, 100  | false  |


// if a>b
// return true
// if b>a 
// return false