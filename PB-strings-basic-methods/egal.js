// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
rating = (number)=>{
    
    for(let i=number; i >=1; i--){
        console.log(i.toString().replace(i,'@').repeat(i));
    } 
}

console.log(rating(4));

// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me by creating a function that takes in a string and checks to see if it contains the following words or phrases:

distractions = (string)=>{
    if(string.includes('anime')||string.includes('meme')||string.includes('vine')||string.includes('roasts')||string.includes('Danny DeVito')){
        return 'NO!'
    } else{
        return 'Safe watching!'
    }
}

console.log(distractions('How to ace BC Calculus in 5 Easy Steps'))

// "anime"
// "meme"
// "vine"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

// Examples
// preventDistractions("vines that butter my eggroll") ➞ "NO!"

// preventDistractions("Hot pictures of Danny DeVito") ➞ "NO!"

// preventDistractions("How to ace BC Calculus in 5 Easy Steps") ➞ "Safe w


for (let h=1; h<13; h++){
    let hourFirst = Math.floor(h/10);
    let hourSec = h%10;
    

    for(let m=0; m<60; m++){
       let mFirst = Math.floor(m/10);
       let mSec = m%10; 

       if(h===m && h==mFirst || )
       console.log(`${h}:${mFirst}${mSec}`);
      
    } 
       
    } 
   


        

