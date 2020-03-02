
// Finding a missing number in a sequence !
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let missing; 
  for (var i = 1; i <= A.length; i++) {
    if (A.indexOf(i) === -1) { 
      missing = i;
    }
  }
  return missing;
  
}

console.log(solution([1,3,6,4,1,2]));

