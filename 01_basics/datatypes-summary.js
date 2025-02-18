// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1246839241567399208n // BigInt represented by n (End of the number)



// Reference ( Non Primitive )

// Array, Object, Functions

const heros = ['ironman', 'thor', 'hulk']

let myObj = {
    name: "kamran",
    age: 24,
} 

const myFunction = function(){
    console.log("Hello world");
    
}


console.log(typeof bigNumber);

