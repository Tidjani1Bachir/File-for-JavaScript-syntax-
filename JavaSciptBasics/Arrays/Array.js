/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/


let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]; /*Don't Use new Array()  */

console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[2]}`); // Hello Sayed
console.log(`${myFriends[1][2]}`); // h
console.log(`Hello ${myFriends[3][1]}`); // Hello Ali

console.log(`${myFriends[3][1][2]}`); // i

console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', Array(2)]0: "Ahmed"1: "Gamal"2: "Sayed"3: ['Sameh']length: 4[[Prototype]]: Array(0)


myFriends[1] = "Gamal";
console.log(myFriends);

myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

myFriends[3] = ["Sameh"];
console.log(myFriends);

console.log(Array.isArray(myFriends)); /* Check if element is an array */
/*<----------------------------------------------------------------------------------------------------------------------------------------  */
console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Array lenght methode");

/*

lenght methode*/

let myFriends2 = ["Ahmed","mohamed","Sayed","Alaa"];

console.log(myFriends2.length); /* 4 index of first element after las element */

console.log(myFriends2);

myFriends2[3]="Gamal";

myFriends2[myFriends2.length]="Za3im";

console.log(myFriends2);

myFriends2[6]="Gamal";

console.log(myFriends2.length);

myFriends2[myFriends2.length]="Za3im";

console.log(myFriends2);

myFriends2[myFriends2.length - 1]="Za";

console.log(myFriends2);

myFriends2.length =myFriends2.length - 2;

console.log(myFriends2);

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Array methodes Adding And Removing");

/*
Adding removing
*/
let myFriends3 =["Ahmed","mohamed","Sayed","Alaa"];

console.log(myFriends3);

myFriends3.unshift("za3im","bachir") /* Adding in the beggining of the array  */

console.log(myFriends3);

myFriends3.push("samah","imen");/* Adding in the end of the array  */
console.log(myFriends3);

let myFriendFirst= myFriends3.shift(); /* delete the first element of the array and u can store the deleted element in the array */

console.log(myFriends3);

console.log(`First Name Is ${myFriendFirst}`);

let myFriendLast = myFriends3.pop(); /* delete the last element of the array and u can store the deleted element in the array */

console.log(myFriends3);

console.log(`Last Name Is ${myFriendLast}`);

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Array methodes Search");
/*
search methodes

*/
let myFriends4 = ["Ahmed","mohamed","Sayed","Alaa" , "Ahmed"];

console.log(myFriends4);

console.log(myFriends4.indexOf("Ahmed",0)); /* First index with value Ahmed */

console.log(myFriends4.indexOf("Ahmed",2)); /* First index with value Ahmed */

console.log(myFriends4.lastIndexOf("Ahmed",-1)); /* First index with value Ahmed */

console.log(myFriends4.lastIndexOf("Ahmed",-2)); /* First index with value Ahmed */


console.log(myFriends4.includes("Ahmed")); /* First index with value Ahmed es7*/
console.log(myFriends4.includes("Ahmed",2)); /* First index with value Ahmed es7*/

console.log(myFriends4.includes("Za")); /* First index with value Ahmed es7*/

if(myFriends4.indexOf("za" === -1)) {
console.log("Not Found First");
}

if(myFriends4.lastIndexOf("za" === -1)) {
console.log("Not Found Last");
}

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Arrays Methodes [Sort]");

/*

Array Sort methodes

*/

let myFriends5 = [10,"Sayed","mohamed","90",1000,100,20,"10",-20,-10];

console.log(myFriends5);

/* console.log(myFriends5.sort()); */
console.log(myFriends5.reverse());

console.log(myFriends5.sort().reverse());

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Arrays [Slicing]");

/*
Slicing Array remove elements and creat small arrays
*/
let myFriends6 = ["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"];

 console.log(myFriends6);

console.log(myFriends6.slice()); /* 0 start default until last element before */

 console.log(myFriends6.slice(1));/* 1 start default until last element before*/

console.log(myFriends6.slice(1,3)); /* 1 start default until 2 */

console.log(myFriends6.slice(-3));

console.log(myFriends6.slice(1,-1));

console.log(myFriends6.slice(1,-1));


console.log(myFriends6.slice(-4,-1));

/* Slice doesn't modifie the original array  */

console.log(myFriends6);
/*
console.log(myFriends6.splice(0,0,"mohamed","Samir")); */

console.log("\n");

myFriends6.splice(1 ,2,"mohamed","Samir");
/* start from index 1 delete 2 elements and put 2 elements in there place */

console.log(myFriends6);

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

console.log("#".repeat(15));
console.log("\n");
console.log("\n");
console.log("Arrays Join");

let myFriends7 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

/*

Join Arrays

*/
let allFriends = myFriends7.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);


console.log(allFriends);

/* Transform to string */

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
/* You can put any string methode after this allFriends.join("|"). the dot i mean the last one */

console.log("#".repeat(15));

// delete arr[index] /* check if elemnt is deleated or not  */