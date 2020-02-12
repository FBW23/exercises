const array = ["hello", "world"];
const nested = [array];
console.log(nested);

const days31 = [];
for (let i =1; i<32; i++){
    days31.push(i);
};

console.log(days31);

const days30 = [];
for (let i =1; i<31; i++){
    days30.push(i);
};

console.log(days30);

const days29 = [];
for (let i =1; i<30; i++){
    days29.push(i);
};

console.log(days29);
const year =[]

const months = [];
for (let i= 1; i<13; i++){
    months.push(i);
};

const simpleYear = [];
for (let month=1; month<13; month++){
    const currentMonth = {};
    for ( let day = 1 ; day< 32; day++){
        if(month===2 && day === 29){
            break;
        } else if(day === 31 && (month===4 || month===6 || month===9 || month === 11)){
            break;
        }
        currentMonth [day]=day;
    } 
    simpleYear[month] = currentMonth;
        
    
}

console.log(simpleYear);
console.log(simpleYear[8] [30]);
console.log(simpleYear["8"] ["30"]); //array starts counting at 0, thats why we need to decrement. We can acsess the keys with bracket notation with objects


const object = {hello : "world"};
const nestedObject = {object};

const unpackedObject = {...object};
console.log(unpackedObject);

const curlyObject = {...object};

//read.a.program.identifier = chained access to an object with key.innerkey.innerinnerkey = property.chain

const read = {
    a : {//first level
        program : { //second level
            identifier: "value" //third level (maximum) deeper than that is something wrong. 
        }
    }
};

console.log(read.a.program.identifier);

//accessing an array in an object

const mixedObject = {};
for (let month=1; month<13; month++){
    const currentMonth = [];
    for ( let day = 1 ; day< 32; day++){
        if(month===2 && day === 29){
            break;
        } else if(day === 31 && (month===4 || month===6 || month===9 || month === 11)){
            break;
        }
        currentMonth.push(day);
    } 
    mixedObject[month] = currentMonth;
        
    
};

console.log(mixedObject);

console.log(mixedObject["9"] [29]);

//nested array with objects inside
const arrayOfObject = [];
for (let month=1; month<13; month++){
    const currentMonth = {};
    for ( let day = 1 ; day< 32; day++){
        if(month===2 && day === 29){
            break;
        } else if(day === 31 && (month===4 || month===6 || month===9 || month === 11)){
            break;
        }
        currentMonth[day]=day;
    } 
    arrayOfObject.push(currentMonth);
        
    
};

console.log(arrayOfObject);

console.log(arrayOfObject[29] [7]);