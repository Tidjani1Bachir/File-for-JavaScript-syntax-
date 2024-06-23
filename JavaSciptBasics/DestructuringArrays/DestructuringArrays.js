/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
    */

/* - ⁡⁢⁣⁢Destructuring Array⁡ */
// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let myFriends = ["Ahmed","Sayed","Ali","Maysa"];

// [a="A",b,c,d,e="Osama"] =myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log("#".repeat(50));

// let [x , y, , z] = myFriends;
// console.log(x);
// console.log(y);
// console.log(z);
/* ⁡⁢⁣⁢################################################################################################⁡ */

// let myFriends2 = ["Ahmed","Sayed","Ali",["Shady","Amr",["Mohamed","Gamal"]]];
// let a,b;
//  [ , , , [a,,[,b]]] =myFriends2
// console.log(a); // Shady
// console.log(b); // Gamal

/* ⁡⁢⁣⁢################################################################################################⁡ */

// /*
// Destructuring
// - Destructuring Array ==> Swapping Variables
// */

// let book ="video"
// let video ="book";

// // // save Book Value in stash

// // let stash =book; //video

// // // change book value
// // book =video //book

// // // change video value
// // video =stash // video

// // Swapping Using Destructuring
// [book,video ] = [video,book]
// console.log(book)
// console.log(video)
// console.log("#".repeat(30));
/* ⁡⁢⁣⁢################################################################################################⁡ */

// // Destructuring
// // - Destructuring Object

// const user ={
//     theName:"Osama",
//     theAge:39,
//     theTitle:"Developer",
//     theCountry:"Egypt",
// };
// // let theName =user.theName;
// // let theAge =user.theAge;
// // let theTitle =user.theTitle;
// // let theCountry =user.theCountry;

// // Assigne
// // ({theName,theAge,theTitle,theCountry} =user);

// // Declaration
// const {theName,theAge,theCountry} =user
// // Delete Title
// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

/* ⁡⁢⁣⁢################################################################################################⁡ */

// /*
// Destructuring
// - Destructuring Object
//  --- Naming the Variabled
//  --- Add New Property
//  --- Nested Object
//  --- Destructuring The Nested Object Only
//  */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "blue",
//   skills: {
//     HTML: 70,
//     Css: 80,
//   },
// };

// // Naming the Variabled Destructering
// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { HTML:h,Css:cs },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My Css Skill Progress Is ${cs}`);

// console.log(`\n`);

// Destructuring The Nested Object Only Destructering
// const {HTML:skillOne,Css:skillTwo} =user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My Css Skill Progress Is ${skillTwo}`);

/* ⁡⁢⁣⁢################################################################################################⁡ */
// /*
//  - Destructuring
//  --- Destructuring Function Parameters
// */

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills:{
//      HTML: 70,
//      Css: 80,
//   },
// };
// showDetails(user)
// //  function showDetails(obj) {
// //     console.log(`Your Name Is ${obj.theName}`);
// //     console.log(`Your Age Is ${obj.theAge}`);
// //     console.log(`Your Css Skill Is ${obj.skills.Css}`);
// // }

// function showDetails({theName:n , theAge:a , skills: { Css:cs } } = user) {
//     console.log(`Your Name Is ${n}`);
//     console.log(`Your Age Is ${a}`);
//     console.log(`Your Css Skill Is ${cs}`);
// }

/* ⁡⁢⁣⁢################################################################################################⁡ */

// //  - Destructuring
// //  --- Destructuring Mixed Content ==> Destructuring Training

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "css", "javaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;

// console.log(n);
// console.log(a);
// console.log(one);
// console.log(e);
