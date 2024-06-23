/* console.log(40000 + 60000);
console.log(parseInt("100000"));
console.log(Math.round(100000,2));

console.log(Math.floor(100000.9));
console.log(10e4);
console.log(100000.00);

console.log(Math.trunc(100000.52));
console.log(Math.pow(10,5));
console.log(+"100000");

console.log(-"-100000"); */

/*<------------------------------------------------------------------------------------------------------------------------------------------  */
/* 9007199254740991 */
/* console.log(-1 * Number.MIN_SAFE_INTEGER); */

/* 16 */

/* console.log(Math.trunc("16.00"+Number.MAX_SAFE_INTEGER).toString()); */

/* let myVar ="100.56789 Views";

 console.log(parseInt(parseInt(myVar)));
 console.log(typeof parseInt(parseInt(myVar)))

 console.log((parseFloat(myVar)).toFixed(2)); */

/*<--------------------------------------------------------------------------------------------------------------------------------------------->  */

let num =10;
/* usnig adittianal Number  */
console.log(+(Number.isInteger(10)) * +2);

/* Without Using Additionnal number */

console.log(+(Number.isInteger(10)) * +"2");

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.pow(parseInt(flt),+"1")); // 10


const randomNumberBetweenZeroAndFour = Math.floor(Math.random() * 5);

console.log(randomNumberBetweenZeroAndFour);

/*

In this code, Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). We then multiply this random number by 5 to get a value between 0 and 5 (exclusive). Finally, Math.floor() is used to round down the result to the nearest integer, giving us a random integer between 0 and 4 inclusive.

Each time you run this code, it will print a different random number between 0 and 4.

*/