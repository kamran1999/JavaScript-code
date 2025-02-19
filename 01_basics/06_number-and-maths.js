const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.length); // undefine value

console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // us standards
console.log(hundreds.toLocaleString('en-IN'));




// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(5,6,3,9));
console.log(Math.max(5,6,3,9));

console.log(Math.random());
//console.log(Math.random()*10); // minimum value 0
//console.log((Math.random()*10)+1); // minimum value 1
//console.log(Math.floor(Math.random()*10)+1); // roundeoff value

const min = 10
const max = 20

console.log(Math.random()*(max - min + 1));
console.log(Math.floor(Math.random()*(max - min + 1)));
console.log(Math.floor(Math.random()*(max - min + 1))+ min);













