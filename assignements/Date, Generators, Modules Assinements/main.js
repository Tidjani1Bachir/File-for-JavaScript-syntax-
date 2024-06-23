/* ⁡⁢⁣⁢Start Assinements 1⁡ */

let myBirthdayDate= new Date("sep 9 2003");

console.log(myBirthdayDate);
console.log(myBirthdayDate.getTime() /1000 );
console.log(myBirthdayDate.getTime()/1000 / 60);
console.log(myBirthdayDate.getTime()/1000 / 60 /60);
console.log(myBirthdayDate.getTime()/1000 / 60 /60/24);
console.log(myBirthdayDate.getTime()/1000 / 60 /60/24/30);
console.log(myBirthdayDate.getTime()/1000 / 60 /60/24/365 );

console.log("#".repeat(30))

/* ⁡⁢⁣⁢End Assinements 1⁡ */

/* ⁡⁢⁣⁢Start Assinements 2⁡⁡ */
let Date1= new Date("1980-01-01T00:00:01");
console.log(Date1);

console.log("#".repeat(30))

/* ⁡⁢⁣⁢End Assinements 2 */


/* Start Assinements 3⁡ */
let date2 = new Date();
date2.setMonth(7)
console.log(date2)

console.log(`Previous Month Is ${date2.getMonth(7)} And Last Day  ${date2.getDate(30)}
`)

console.log("#".repeat(30))
/* ⁡⁢⁣⁢End Assinements 3 */


/* ⁡⁢⁣⁢Start Assinements 4⁡ */

let birthday1 = new Date("sep 09 2003");
console.log(birthday1);
/*<------------------------------------------>  */
let birthday2 = new Date();
birthday2.setFullYear(2003, 8,9);
birthday2.setHours(0, 0,0);
console.log(birthday2);

/*<------------------------------------------>  */
let birthday3=new Date(1063090800000
    )
console.log(birthday3);

console.log("#".repeat(30));

/* ⁡⁢⁣⁢End Assinements 4 */


// /* ⁡⁢⁣⁢Start Assinements 5⁡ */

// /* Start Time */
// const startTime = performance.now()

// for(let i =1;i<=99999;i++) {
//     console.log(i);
// }

// //  Time End
// const endTime = performance.now();

// //  Operation Duration
// const duration = endTime - startTime;

// console.log(`The operation took ${duration} milliseconds to complete.`);



// /* ⁡⁢⁣⁢End Assinements 5⁡ */

// /* ⁡⁢⁣⁢Start Assinements 6⁡ */

// // Write Your Generator Function Here

// function* gen() {
//     // yield 1;
//     // yield 2;
//     // return "A";
//     // yield 3;
//     // yield 4;

//     let index = 14
//     let i =1;;

//     while (true) {
//       yield index*2^i;
//       i++;
//     }
//   }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// /* ⁡⁢⁣⁢End Assinements 6⁡ */

/* ⁡⁢⁣⁢Start Assinements 7⁡ */

function* genNumbers() {
    yield* new Set([1, 2, 2, 2, 3, 4, 5]);
  }
  function* genLetters() {
    yield* new Set(["A", "B", "B", "B", "C", "D"]);
  }

  // ⁡⁢⁢⁢⁡⁢⁣⁣Write Your Generator Function Here⁡⁡


  function* genAll() {
// Delegate to the genNumbers() generator
yield* genNumbers();

// Delegate to the genLetters() generator
yield* genLetters();

}


  let generator = genAll();

  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}

/* ⁡⁢⁣⁢End Assinements 7⁡ */

/* ⁡⁢⁣⁢Start Assinements 8⁡ */
// main.js File

import calc, { modOne } from "./app.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60


/* ⁡⁢⁣⁢End Assinements 8⁡ */
