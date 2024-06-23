/*
the return line stop the function from executing
*/


/*Function
- Return
- Automatic Semicolon Insertion [No Line Terminator Allowed]
- Interrupting
*/

function generate(start, end) {
for (let i = start; i <= end; i++) {
  if (i === 15) {
    return `Interrupting`;
  }
  console.log(i);
}
}

generate(10, 20)

/*<-------------------------------------------------------------------------------------------------------------------------------------------  */
/*
Function
- Rest Parameters
- Only One Allowed
- Must Be Last Element
*/

function calc(...numbers) {
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*<-------------------------------------------------------------------------------------------------------------------------------------------  */

/*
Function
- Anonymous Function
- Calling Named Function vs Anonymous Function
- Argument To Other Function
- Task Without Name
- SetTimeout
- in anonymous function we add name because  this helps us in debugging
*/

let calculator = function calc(num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));
/* if i put the console.log line before the variable declaration i will have an erreur  */

/* function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

document.getElementById("show").onclick =function () {
  console.log("Show");
};

setTimeout(function elzero() {
  console.log("Good");
}, 2000);
 */
/*
u can put function inside ${}

*/
/*<-------------------------------------------------------------------------------------------------------------------------------------------  */

/*
- Arrow function, it's an alternative to regular   function
- it's not the best alternative to that function it's has some limitation we don't use them in all use cases
-

*/
console.log("\n");
console.log("\n");
console.log("\n");


/* let print = function () {
return 10;
};

console.log(print()); */

/* function print () {
  return 10;
};

console.log(print()); */

/*<------------------------------------------->  */
/* let print = () => 10;
let printt = _ => 20; */ /* it's not widely used in js */

/* console.log(print());
console.log(printt()); */

/*<------------------------------------------->  */
/*  let print = function (num) {
return num;
};

console.log(print(10)); */

/* let print =  (num) =>  num; */

/* let print =  num =>  num; true */


/* console.log(print(100)); */

/*<------------------------------------------->  */

/*  let print = function (num1,num2) {
return num1 + num2;
};

console.log(print(100,50)); */

/*  let print = (num1,num2) => num1 + num2;


console.log(print(100,50)); */

/*<------------------------------------------->  */

/* the local scope can access the global scope but the revers is not  */

/* the local function can access the global function variables but the revers is not  */

/*

The concept of the scope chain becomes evident when innerFunction is trying to access variables. If a variable is not found in the current scope, JavaScript searches for it in outer scopes based on the scope chain.

*/

/*<------------------------------------------->  */



/*<------------------------------------------->  */


/*<------------------------------------------->  */


/*<------------------------------------------->  */


