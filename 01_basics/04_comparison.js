console.log( 2 > 1 );
console.log( 2 >= 1 );
console.log( 2 < 1 );
console.log( 2 == 1 );
console.log( 2 != 1);



console.log( "2" > 1 );
console.log( "02" > 1 );


console.log( null > 1 );
console.log( null == 1 );
console.log( null >= 1 );


/* The reason is that an equality check == and comparisons > < >= <= work differently.
comparison convert null to a number. treating is at 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.*/

console.log( undefined == 0 );
console.log( undefined > 0 );
console.log( undefined < 0 );

// ===

console.log( "2" === 2 );


