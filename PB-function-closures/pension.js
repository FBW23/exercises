(function(age,retAge,mWage,percentage) {
    
    let result;
    percentage = parseFloat(percentage);

    if(age > retAge) {
        console.log("You're already retired!");
    } else {
         result = (retAge - age) * 12 * percentage * mWage;
         console.log(result);
        }
})(40, 65, 2000, 0.05);

