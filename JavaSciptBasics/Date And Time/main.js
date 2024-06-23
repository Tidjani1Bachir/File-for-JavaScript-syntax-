/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/


let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

console.log("#".repeat(30));

/*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow1 = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow1 - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow1);
console.log(dateNow1.getTime());
console.log(dateNow1.getDate());
console.log(dateNow1.getFullYear());
console.log(dateNow1.getMonth());
console.log(dateNow1.getDay());
console.log(dateNow1.getHours());
console.log(dateNow1.getMinutes());
console.log(dateNow1.getSeconds());

console.log("#".repeat(30));
/*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow2 = new Date();
console.log(dateNow2);

console.log("#".repeat(66));

// dateNow2.setTime(0);
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setTime(10000);
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setDate(35);
// console.log(dateNow2);

// dateNow2.setFullYear(2020, 13);
// console.log(dateNow2);

dateNow2.setMonth(15);
console.log(dateNow2);

console.log("#".repeat(30));
/*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*<------------------------------------------------------------------------------------------------------------------------------------------------>  */
// /*
//   Date And Time
//   - Track Operations Time

//   Search
//   - performance.now()
//   - performance.mark()
// */

// // Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

/*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
    yield 1;
    console.log("Hello After Yield 1");
    yield 2;
    yield 3;
    yield 4;
  }

  let generator = generateNumbers();

  console.log(typeof generator);
  console.log(generator);

  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());

  for (let value of generateNumbers()) {
    console.log(value);
  }

  for (let value of generator) {
    console.log(value);
  }
  /*<------------------------------------------------------------------------------------------------------------------------------------------------>  */
/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
  }

  function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
  }

  function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6];
  }

  let generator1 = generateAll();

  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.return("Z"));
  console.log(generator1.next());
  console.log(generator1.next());
  console.log(generator1.next());

  /*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

// function* generateNumbers() {
//     // yield 1;
//     // yield 2;
//     // return "A";
//     // yield 3;
//     // yield 4;

//     let index = 0;

//     while (true) {
//       yield index++;
//     }
//   }

//   let generator2 = generateNumbers();

//   console.log(generator2.next());
//   console.log(generator2.next());
//   console.log(generator2.next());
//   console.log(generator2.next());

  /*<------------------------------------------------------------------------------------------------------------------------------------------------>  */

/*
<body>
    <script src="main.js" type="module"></script>
    <script src="app.js" type="module"></script>
  </body>
*/


/* ################################################################################################ */


// --- main.js
// /*
//   Modules
//   - Import And Export
// */

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };

/* ################################################################################################ */

// app.js
// import { a, arr, saySomething as s } from "./main.js";

// console.log(a);
// console.log(arr);
// console.log(s());

/*<-------------------------------------------------------------------------------------------------------------------------------------------------------->  */

/*
<body>
    <script src="main.js" type="module"></script>
    <script src="app.js" type="module"></script>
  </body>
*/

/* ################################################################################################ */

// /*
//   Modules
//   - Export Alias
//   - Named Export
//   - Default Export
//   - Import All
// */

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a as myNumber, arr, saySomething };

// export default function () {
//   return `Hello`;
// }


/* ################################################################################################ */

// // import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// // console.log(myNumber);
// // console.log(arr);
// // console.log(s());
// // console.log(elzero());

// import * as all from "./main.js";

// console.log(all);

// console.log(all.myNumber);
// console.log(all.arr);