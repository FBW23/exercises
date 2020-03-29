const convert=(minutes)=>{
    //calculate from minutes to seconds
    //minutes*60=seconds
    console.log(minutes*60);
    return minutes*60;
}
let output=convert(5); // expect 300
console.log(output);
