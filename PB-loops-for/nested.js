//Create a for loop that prints the following:  >1 1 1 2 2 2 3 3 3 4 4 4;
console.log(`>`);
console.log(`>`);
// for (let n1 = 1; n1 < 5; n1++) {

//     console.log(n1);
//     console.log(n1);
//     console.log(n1);


// }

//  let count = 0;
//  for (let i = 1; i <= 4;) {

//      if ((count !== 0) && (count % 3 === 0)) 
//         i++;
//     }

//     console.log(i);
//     count++;
//  }







 let count = '';
 for (let i = 1; i <= 4;i++) {

    for(let j=0; j<=2; j++) {
      count+=i;
   }

  
    
 }

console.log(count)




// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);




let output2 = "";
for (let i = 0; i <= 2; i++) {
   
    for (let j = 0; j <= 4; j++) {
        output2 += j;
        
    }
}


console.log(output2);