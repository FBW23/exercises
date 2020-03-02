function printOrigin(name = 'Alice', country='US') { // Default values
    console.log(`Hello my name is ${name} and I am from ${country}`);
}

printOrigin('Plamen', 'Bulgaria');
printOrigin('Plamen')
printOrigin(undefined, 'Brasil'); // undefined gets default values
printOrigin();

// default parameters
// function name(<parameter> = default value) {...}


// if I don't know how many arguments will come ... i can use ...args
function printNames (...args) {
    return console.log(`Hello, ${args} !`)
}

printNames(' Plamen', ' Nicolo', ' Julien');

// Bracket Notation for arguments: first args[0], second arg[1], third arg[2]
function printNamesIndividually (...args) {
    for(let i = 0; i < args.length; i++) {
        console.log('Hello,' + args[i] + '!')
    }
}

printNamesIndividually(' Constantine', ' Nagster', ' Balasz', ' Joao');

// Print them backwards
function printNamesIndividuallyBackward (...args) {
    for(let i = args.length - 1; i > -1; i--) {
        console.log('Hello,' + args[i] + '!')
    }
}

printNamesIndividuallyBackward(' Constantine', ' Nagster', ' Balasz', ' Joao');