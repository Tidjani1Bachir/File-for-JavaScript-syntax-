/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3; */

/* Methode 1 */
/* let name3 =myFriends[--num]
let name2 =myFriends[--num]
let name1 =myFriends[--num];

let myFriendsAltArray =""+name1+" "+name2+" "+name3
myFriendsAltArray= myFriendsAltArray.split(" ");
console.log(myFriendsAltArray);
console.log(Array.isArray(myFriendsAltArray)); */

/* Methode 2 */

/* let myFriendsAltArray2 = [];

myFriendsAltArray2.push(name1);
myFriendsAltArray2.push(name2);
myFriendsAltArray2.push(name3);

console.log(myFriendsAltArray2); */

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

/* let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

 friends.unshift("Eman", "Osama");

 friends.pop();
 friends.pop();
 friends.pop();
 friends.pop();

console.log(friends); */

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

/* let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = []; */


/*
let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
*/

/* finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); */

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

/* let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

words =words.pop()[0].toUpperCase().replace(/^./, '').replace(/^./, '');
console.log(words);
 */

/*

The replace() method is a built-in JavaScript method that is used to search for a pattern in a string and replace it with a new substring or value.

In this case, the method is being applied to the string "Elzero". So, the original string is "Elzero".

The first argument of replace() is a regular expression pattern. In regular expressions, ^ is a special character that indicates the beginning of a string.

The . in the regular expression ^. matches any single character except for a newline character.

So, ^. in this context represents the first character of the string.

The second argument of replace() is the replacement value. In this case, it is an empty string ''.

Now, let's see how the replace() method works:

*/

/*<----------------------------------------------------------------------------------------------------------------------------------------  */

/* let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
let haystack2 = ["PHP", "JS", "Python"];

if(haystack[1] === "JS") console.log("found");


let altString = haystack.pop();

if(altString == "JS") console.log("found")

let altString2 = haystack.pop();

if(altString2 == "JS") console.log("found")


let altString3 = haystack2.shift();

if(altString3 == "JS") console.log("found")

let altString4 = haystack2.shift();

if(altString4 == "JS") console.log("found") */



/*<----------------------------------------------------------------------------------------------------------------------------------------  */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

/* let letter1 = arr2.concat(arr1).sort().reverse().shift();

let letter2 = arr2.concat(arr1).sort().reverse().shift();
let letter3 = arr2.concat(arr1).sort().reverse().shift(); */

/* console.log(letter1);
console.log(letter2);
console.log(letter3); */

allArrs = arr2.concat(arr1).sort().reverse()

allArrs.pop();
allArrs.pop();
allArrs.pop();
allArrs.pop();
allArrs =allArrs.reverse().join("").toLocaleLowerCase();
console.log(allArrs);