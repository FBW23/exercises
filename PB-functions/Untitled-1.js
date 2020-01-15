const cubed2 = (...args) => args.length === 0 ? a = 0 : args.map(value => Math.pow(value, 3)).reduce((a, b) => a + b);

console.log(cubed2(2, 2));


const cubed3 = (a, b) => b.slice(0, a.length) === a ? true : false;
console.log(cubed3('ds', 'dfgh'));

const cubed4 = (a) => a <= 0 ? true : false;