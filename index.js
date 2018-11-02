// 2. import hello function

// object destructuring
const {hello, goodbye} = require('./greetings');

const catFacts = require('cat-facts');

let randomFact = catFacts.random();

console.log(randomFact);

// hello(`from ya mama`);
// goodbye(`Amelia`);