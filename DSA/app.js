let prompt = require('prompt-sync')();
let age = +prompt("Enter your age: ");
console.log(typeof age);
console.log(`Age entered: ${age}`);