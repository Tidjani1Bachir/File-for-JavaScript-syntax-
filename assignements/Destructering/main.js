//  /* ⁡⁢⁣⁢Start Assinement 1⁡⁡  */
//  let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// const [a,,,,e] =myNumbers
// console.log(a * e); // 5

//  /* ⁡⁢⁣⁢End Assinement 1⁡  */


//  /* ⁡⁢⁣⁢Start Assinement 2⁡  */

//  let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

//  // Write Your Destructuring Assignment Here
// [a,b,c,[d,e,[f,g]]] =mySkills;
//  console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

//  // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//  /* ⁡⁢⁣⁢End Assinement 2⁡  */

//  /* ⁡⁢⁣⁢Start Assinement ⁡⁢⁣⁡⁢⁣⁢3⁡⁡⁡  */

//  let arr1 = ["Ahmed", "Sameh", "Sayed"];
//  let arr2 = ["Mohamed", "Gamal", "Amir"];
//  let arr3 = ["Haytham", "Shady", "Mahmoud"];

//  // Play With Arrays To Prepare For Destructuring
//  // Write Your Destructuring Assignment Here

//  const concatenatedArray = arr1.concat(arr3);

// const [c,,,,a,b] = concatenatedArray;
//  console.log(`My Best Friends: ${a}, ${b}, ${c}`);

//  // My Best Friends: Shady, Mahmoud, Ahmed

//  /* ⁡⁢⁣⁢End Assinement ⁡⁢⁣⁢3⁡⁡  */

//  /* ⁡⁡⁢⁣⁢Start Assinement 4⁡ */

//  const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };

//   // Write Your Destructuring Assignment Here
//  const {age:a,working:w} =member
//   console.log(`My Age Is ${a} And Iam ${w === false ? "Not":""} Working`);
//   // My Age Is 30 And Iam Not Working
//   const {country:c} =member
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
//   const {hobbies:[h1,,h3]} =member
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming

//  /* ⁡⁢⁣⁢End Assinement 4⁡ */


// /* ⁡⁢⁣⁢Start Assinement 5⁡ */

// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//         "Oath In Felghana": ["USA", "Japan"],
//         "Ark Of Napishtim": {
//             US: "20 USD",
//             JAP: "10 USD",
//         },
//         Origin: "30 USD",
//     },
// };
// // Write Your Destructuring Assignment/s Here
// const { title: t, developer: d, releases: { "Oath In Felghana":[u, j], ["Ark Of Napishtim"]:{ US: u_price, JAP: j_price }, Origin: or , },}  = game


// const o = "Oath In Felghana"
// const a = "Ark Of Napishtim"

// /* ,"Ark Of Napishtim":a}
// } =game */


// console.log(`My Favourite Games Style Is ${t} Style`);
// //   My Favourite Games Style Is YS Style

//   console.log(`And I Love ${d} Games`);
// //   And I Love Falcom Games

//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// //   My Best Release Is Oath In Felghana It Released in USA & Japan

//   console.log(`Although I Love ${a}`);
// //   Although I Love Ark Of Napishtim

//   console.log(`${a} Price in USA Is ${u_price}`);
// //   Ark Of Napishtim Price in USA Is 20 USD

//   console.log(`${a} Price in Japan Is ${j_price}`);
// //   Ark Of Napishtim Price in Japan Is 10 USD

//   console.log(`Origin Price Is ${or}`);
// //   Origin Price Is 30 USD

// /* ⁡⁢⁣⁢End⁡ ⁡⁢⁣⁢Assinement⁡ ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁢⁡⁢⁣⁢5⁡ */

